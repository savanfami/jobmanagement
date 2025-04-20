import server from  './app.js'
import connectDB from './config/connection.js'
(async () => {
    try {
       server
        await connectDB();
    } catch (error) {
        console.error("issues in running server:", error);
        throw new Error("issues in running server");
    } finally {
        process.on("SIGINT", async () => {
            console.log("server shutting down");
            process.exit();
        });
    }
})();


