
import mongoose from "mongoose";

const userKaSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dp: String,
    // wishList: [],
    // age: Number
});

export default  mongoose.models.user || mongoose.model('user', userKaSchema);