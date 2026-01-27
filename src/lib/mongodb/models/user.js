import { Schema, models, model } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    }
})

const User = models.User || model("User", UserSchema);
export default User;