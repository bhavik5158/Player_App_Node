import mongoose from 'mongoose'

const connection = async (username, password) => {
  const URL = ''
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    mongoose.set('strictQuery', false)
    console.log('DatabAse connection sucessfully')
  } catch (error) {
    console.log('Eroor while connecting with database', error)
  }
}

export default connection
