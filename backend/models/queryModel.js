import mongoose from "mongoose";
import { Schema } from "mongoose";

const querySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
    syncedToSheets: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Query = mongoose.model('Query' , querySchema);
export default Query;