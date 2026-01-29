import MongoConnect from "@/lib/mongodb";
import createPost from "@/lib/mongodb/controllers/createPost";

export async function POST(req) {
    const { title, text="" } = await req.json()

    try {
        const post = await createPost(title, text);
        console.log("post created");
        console.log(post);
        return Response.json(post, { status: 201 });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 400 });
    }
}