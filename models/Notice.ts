import { model, models, Schema } from "mongoose";


const noticeSchema = new Schema({
    title: { type: String, requied: true, trim: true},
    author: { type: String, requied: true, trim: true},
    content: { type: String, requied: true, trim: true},
},
{
    timestamps: true,
},
)

export const Notice = models.Notice || model("Notice", noticeSchema)
