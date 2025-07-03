import mongoose from "mongoose";

const Post = new mongoose.Schema({
    content: {type: String, required: true},
    picture: {type: String},
})

export default mongoose.model('Post', Post)