import mongoose from "mongoose";

// function to connect to the mongodb database

export const connectDB = async () =>{
    try {
        if (mongoose.connection.readyState === 1) return;

        mongoose.connection.on('connected', ()=> 
            console.log('Database Connected')
        );
        await mongoose.connect(`${process.env.MONGODB_URI}/WE-CHAT`)
        
    }catch(error){
        console.log("DB error", error);

    }
};

export default connectDB;