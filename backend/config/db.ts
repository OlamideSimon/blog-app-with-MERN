import { connect } from 'mongoose'


const connectDb = async() => {
    try {
        const conn = connect(`${process.env.MONGO_URI}`)

        console.log(`Mongodb connected: ${(await conn).connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb