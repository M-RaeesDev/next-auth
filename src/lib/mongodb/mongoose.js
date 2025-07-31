import mongoose from "mongoose";

let initialized = false;

export const connet = async ()=>{
    mongoose.set('strictQuery', true)

    if(initialized){
        console.log("MongoDB Is Already Connected");
        return;   
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{

            dbName:'naxt-auth-app',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB Connected");
        initialized = true;
    } catch (error) {
        console.log("MongoDB Connection Error :", error);
        
    }
}