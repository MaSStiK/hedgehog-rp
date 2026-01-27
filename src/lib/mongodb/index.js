import { MongoClient } from "mongodb"

const URI = process.env.MONGODB_URI;

if (!URI) throw new Error("Please add Mongo URI to .env");

let client;
let clientPromise;

if (process.env.NODE_ENV !== "production") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(URI);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} 
else {
    client = new MongoClient(URI);
    clientPromise = client.connect();
}

export default clientPromise;