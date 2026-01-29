import mongoose, { Schema } from "mongoose"

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
    },
    text: {
        type: String,
        default: "",
        maxlength: 5000,
    }
}, {
    timestamps: true
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema);