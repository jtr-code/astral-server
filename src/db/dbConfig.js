import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.DATABASE_URL);
        console.log(
            ` \n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log(" \n MongoDb connection FAILED ", error.message);
        process.exit(1);
    }
};

export { connectDb };
