var express = require('express');

var router = express.Router();
const config = require("../config") //config in altındaki index.js i çeker
/* GET home page. */
const fs = require ("fs"); //bu kütüphane ile dosya işlemleri yapılabilir
let routes = fs.readdirSync(__dirname); //bu klasör //__dirname: bulunduğu path

for(let route of routes){ //bu klasörde bulunan her bir dosya üzerinde döner
  if(route.includes(".js") && route != "index.js"){
    router.use("/"+ route.replace(".js" , ""),require('./'+route));
  }
} //dinamik routing yapısı

module.exports = router;
