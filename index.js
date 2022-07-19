const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/test/:status/:semester', function(req, res){
  res.json({
    npm   : req.params.npm,
    nik   : req.query.nik,
    nama  : req.body.nama,
    alamat: req.body.alamat,
    agama : req.body.agama,
    gender: req.body.gender,
    negara: req.body.negara,
    hobi  : req.query.hobi,
    email : req.body.email,
    suku  : req.body.suku

    })
})

app.listen(3000)
console.log("server aman")