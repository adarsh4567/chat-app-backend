const mongoose=require('mongoose');

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB is connected to ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectDB;