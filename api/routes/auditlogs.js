const express = require("express"); //express' in dosyaya dahil edilmesi
const router = express.Router(); // express' in altındaki router metodunu dosyaya dahil ettik (router oluşturabilmek için)

router.get('/:id', (req, res, next) => {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    })
}); //buradaki req objesi bize gönderilen isteğin içinde bulunan body , header vs. request'in bize gönderdiği adresi vs. her şeyi içerisinde barındırır.
// res(response) objesi bizim bu request' e vereceğimiz cevap için kulanacağımız fonksiyonları içerisinde barındırır.
//next ise eğer biz bu router'ı middleware olarak kullanacak isek, buradan sonra başka alan, başka bir router çalışacak ise next o alaana geçiş yapılmasını sağlar. 
//res.json olarak yazılan express kodu HTTP isteği altında o isteğin detaylarını json formatında geri döner, istemciden gelen istekte body'de ,query'de , url parametrelerinde , header'larda ne varsa hepsini json formatında geri döndürür.


module.exports = router;