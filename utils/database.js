// utils/databese.js

import mongoose from "mongoose"

const connectDB = async () => {
  const MONGO_DB_URL = process.env.MONGO_DB_URL;
  try{
    await mongoose.connect(MONGO_DB_URL)
    console.log("Success: Connected to MongoDB")
  } catch(err) {
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB