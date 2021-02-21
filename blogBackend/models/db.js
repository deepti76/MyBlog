const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Mongodb connection successfull");
    }
    else{
        console.log("failed to connect with mongodb",JSON.stringify(err,undefined,2));
    }
});

require('./user.model')
require('./places.model')