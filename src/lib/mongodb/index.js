import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if (!URI) throw new Error("Please add MONGODB_URI to .env");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { connection: null, promise: null };

export default async function MongoConnect() {
    if (cached.connection) return cached.connection;
    if (!cached.promise) cached.promise = mongoose.connect(URI, { bufferCommands: false });
    cached.connection = await cached.promise;
    return cached.connection;
}