import OpenAI from "openai";
import { streamText } from "ai";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { openai as aiSdkOpenai } from "@ai-sdk/openai"
import { text } from "stream/consumers";

const { ASTRA_DB_NAMESPACE, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_APPLICATION_TOKEN, 
    OPENAI_API_KEY 
} = process.env;

const openaiClient = new OpenAI({ 
    apiKey : OPENAI_API_KEY
});

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);

const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE });

export async function POST (req: Request) {
    const{ messages } = await req.json();
    const latestMessage = messages[messages?.length - 1]?.content;

    let docContext = '';

    const embedding = await openaiClient.embeddings.create({
        model: "text-embedding-3-small",
        input: latestMessage,
        encoding_format: 'float'
    })

    try {
        const collection = await db.collection(ASTRA_DB_COLLECTION);
        const cursor = await collection.find(null, {
            sort: {
                $vector: embedding.data[0].embedding
            },
            limit: 10
        })

        const document = await cursor.toArray();

        const docsMaps = document?.map(doc => doc.text)

        docContext = JSON.stringify(docsMaps);
    
    } catch (err) {
        console.log("Error querying the Database... ", err);
    }

    const template = {
        role: "system",
        content: `You are an AI assistant who knows everything about Cricket.
        Use the below context to augment what you know about Cricket.
        The context will provide you with the most recent page data from wikipedia and other sources.
        If the context doesnt include the information you need, answer based on your existing knowledge 
        and dont mention the source of your information or what the context does or doesnt include.
        Formate responses using markdown where applicable and dont return images.
        --------------------------------
        START CONTEXT
        ${docContext}
        END CONTEXT
        --------------------------------
        QUESTION: ${latestMessage}
        --------------------------------
        `
    };

    const response = streamText({
        model: aiSdkOpenai("gpt-4"),
        messages: [template, ...messages]
    });

    return response.toDataStreamResponse();
}