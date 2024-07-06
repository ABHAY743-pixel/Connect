import mongoose from "mongoose"
   


const Connection = async (username,password) =>{

    const URL = `mongodb+srv://${username}:${password}@blog-app.ywb4lfr.mongodb.net/?retryWrites=true&w=majority`
    try{
      await  mongoose.connect(URL,{useNewUrlParser: true})
      console.log("Database connected successfully") 
    }catch(err){ 
        console.log("Error while connecting to database",err)
    }
}

export default Connection  