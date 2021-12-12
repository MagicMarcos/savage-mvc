const mongoose = require('mongoose')

// FUNCTION EXPRESSION
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
// ALLOWS THE CODE TO BE EXPORTED WHERE IT'S BEING USED IN OTHER FILES
module.exports = connectDB
