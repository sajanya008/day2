const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sajanyasudhakaran:muth123@cluster0.x56bx.mongodb.net/providence?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to MongoDB")

})
.catch((err)=>{
    console.log(err)
})