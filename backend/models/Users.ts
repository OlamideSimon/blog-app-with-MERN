import { Schema, model } from 'mongoose'

interface UserDetails {
    userName: string,
    email: string,
    password: string
}

const UserSchema = new Schema<UserDetails>(
    {
        userName: {
            type: String,
            required: [true, 'Please enter your name']
        },
        email: {
            type: String,
            required: [true, 'Please enter email']
        },
        password: {
            type: String,
            required: [true, 'Please enter password']
        }
    }
)

export default model<UserDetails>('Users', UserSchema)