const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_URI, {
            // useUnifiedTopology: true,
            // useNewUrlParse: true,
            // useCreateIndex: true

        
        });
        console.log("DB connect success");
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = {connectDB};