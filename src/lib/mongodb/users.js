import clientPromise from "."

let client
let db
let users

async function init() {
    if (db) return

    try {
        client = await clientPromise
        db = await client.db()
        users = await db.collection("users")
    } catch (error) {
        throw new Error("Ошибка подключения к БД")
    }
}

(async () => {
    await init()
})