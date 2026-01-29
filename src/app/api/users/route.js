import MongoConnect from "@/lib/mongodb";
import createUser from "@/lib/mongodb/controllers/createUser";

export async function POST(req) {
    const { name, bio="" } = await req.json()

    try {
        const user = await createUser(name, bio);
        console.log("user created");
        console.log(user);
        return Response.json(user, { status: 201 });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 400 });
    }
}