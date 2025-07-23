const mongoose = require("mongoose");
const schema = mongoose.Schema({
    email: {type:mongoose.Schema.String ,required: true},
    password : {type:mongoose.Schema.String , required:true},
    is_active : {type: Boolean , default:true },
    first_name :String, 
    last_name: String ,
    phone_number : String,

}, {
    timestamps : {
        createdAt: "created_at", //kendiliğinden atanan değerler. Mongoose bizim için bu alanları doldurur.
        updatedAt :"updated_at"
    }
} )

class Users extends mongoose.Model{

}

schema.loadClass(Users); //Users sınıfını schema ya yükler, entegre eder. Users sınıfının özelliklerini sahip bir model oluşur.
module.exports = mongoose.model("users" ,schema);