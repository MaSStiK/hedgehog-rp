import MongoConnect from ".."
import Post from "../models/Post"

export default async function createPost(title, text="") {
    await MongoConnect()
    const post = await Post.create({ title, text })
    return post
}