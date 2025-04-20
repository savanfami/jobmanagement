import { config } from 'dotenv'
import mongoose from 'mongoose'

config()

export const PORT = process.env.PORT || 8000

 const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI 
        const client = await mongoose.connect(uri);

        if (client) {
            console.log(`
          -----------------------------------
          - MONGODB CONNECTED  -
          -----------------------------------
        `);
        } else {
            console.error("Failed to connect to MongoDB.");
            process.exit(1);
        }
    } catch (error) {
        console.error('Error connecting to MongoDb:', error);
        process.exit(1);
    }
};

export default connectDB

