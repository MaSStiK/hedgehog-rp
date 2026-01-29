import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if (!URI) throw new Error("Please add MONGODB_URI to .env");

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function MongoConnect() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) cached.promise = mongoose.connect(URI, { bufferCommands: false });
    cached.conn = await cached.promise;
    return cached.conn;
}