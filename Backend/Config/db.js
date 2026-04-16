const mongoose = require("mongoose")

const ConnectDB = async () => {
     try { 
        const connect  =await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo db Connected : ${connect.connection.host}`)
    } catch (err) {
        console.log(`Mongo db Connection Error : ${err}`)
    }
}

module.exports = ConnectDB