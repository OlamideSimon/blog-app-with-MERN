import { Schema, model, Types } from 'mongoose'

interface Comments{
    name: string,
    email: string,
    comment: string,
    blog: Types.ObjectId
}

const CommentSchema = new Schema<Comments>(
    {
        name: {
            type: String,
            required: [true, 'Name cannot be empty']
        },
        email: {
            type: String,
            required: [true, 'Please add email']
        },
        comment: {
            type: String,
            required: [true, 'Please comment must be included']
        },
        blog: {
            type: Schema.Types.ObjectId,
            ref: 'Blogs',
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default model<Comments>('Comments', CommentSchema)