const mongoose = require('mongoose')

const connect = async () => {
   try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('ewean sama rahma sama nindi sama putri')
   }catch(err){
    console.error();
    
   }
    
}

module.exports = connect