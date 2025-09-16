import mongoose from "mongoose";


const connectDB = async (req, res) => {
    try {
        mongoose.connection.on('connected', () => {
            console.warn("Database connected successfully")
        })
        await mongoose.connect(`${process.env.MONGODB_URL}/hotel-booking`)

    } catch (error) {
        console.warn(error.message)
    }
}
export default connectDB;