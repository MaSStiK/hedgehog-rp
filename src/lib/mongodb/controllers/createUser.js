import MongoConnect from "../"
import User from "../models/User"

export default async function createUser(name, bio="") {
    await MongoConnect()
    const user = await User.create({ name, bio })
    return user
}