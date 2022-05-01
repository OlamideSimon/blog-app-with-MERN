import { Schema, model, Types } from "mongoose";

interface Blog {
    user: Types.ObjectId,
    title: string,
    description: string,
    body: string,
}

const BlogSchema = new Schema<Blog>(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Users'
        },
        title: {
            type: String,
            required: [true, 'Please enter a title']
        },
        description: {
            type: String,
            required: [true, 'Please enter blog\'s description']
        },
        body: {
            type: String,
            required: [true, 'Please enter blog\'s body']
        }
    },
    {
        timestamps: true
    }
)

export default model<Blog>('Blogs', BlogSchema)