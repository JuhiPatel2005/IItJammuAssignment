const mongoose = require("mongoose")

const connectDB = async () => {
    const uri = process.env.MONGO_URI
    if (!uri) {
        throw new Error("MONGO_URI is not defined in .env or environment variables")
    }
    if (uri.includes("<PASSWORD>")) {
        throw new Error("MONGO_URI contains placeholder '<PASSWORD>'. Replace it with your Atlas user password.")
    }

    try {
        const conn = await mongoose.connect(uri)

        console.log(`Mongo DB connected successfully : ${conn.connection.host}`)
    } catch (error){
        console.error(`Mongo DB connection failed with error : ${error.message}`)
        throw error
    }
}


module.exports = connectDB