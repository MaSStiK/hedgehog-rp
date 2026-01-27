import User from "../models/user"

export default async function createUser(name, bio="") {
    const newUser = new User({ name, bio })

    try {
        await newUser.save()
    } catch (error) {
        console.log("error createTodo");
    }
}