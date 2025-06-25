const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
        name: {
    type: String,
      require:true    
    },
     email: {
        type: String,
       unique: true,
       require:true    
    },
      password: {
        type: String,
        require:true    
  },
  taskmodel: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'taskModel'
  }]
   
    

})
    const userModel = mongoose.model('user',userschema);

    module.exports = userModel;