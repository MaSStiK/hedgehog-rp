import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    bio: {
        type: String,
        default: "",
        maxlength: 300,
    }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model("User", UserSchema);