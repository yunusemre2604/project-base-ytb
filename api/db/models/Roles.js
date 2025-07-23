const mongoose = require("mongoose");
const schema = mongoose.Schema({
    role_name :{type :mongoose.SchemaTypes.String , required:true} , //(required dolu olması gerekmesi anlamına geliyor)
    is_active : {type: mongoose.SchemaTypes.Boolean , default:true}, //(default olarak hangi değer alacak)
    created_by : {
        type: mongoose.SchemaTypes.ObjectId ,
        required :true //createdby alanı dolu olmadan bu şemaya bir şey kaydedemezsin
    }

}, {
    versionKey : false, //mongoose da kayıt olduğunda bu alan oluşur, bu alanın oluşmaması için false yapıyoruz.
    timestamps : {
        createdAt: "created_at", //kendiliğinden atanan değerler. Mongoose bizim için bu alanları doldurur.
        updatedAt :"updated_at"
    }
} )

class Roles extends mongoose.Model{

}

schema.loadClass(Roles); //Users sınıfını schema ya yükler, entegre eder. Users sınıfının özelliklerini sahip bir model oluşur.
module.exports = mongoose.model("roles" ,schema);