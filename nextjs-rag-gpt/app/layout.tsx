import "./global.css";

export const metadata = {
    title : "CrickGPT",
    description: "CrickGPT is a place to go for all your Cricket Questions. "
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex items-center justify-center h-screen">
                {children}
            </body>
        </html>
    )
}

export default RootLayout;