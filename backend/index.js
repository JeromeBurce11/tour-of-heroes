var app = require('express')();
var express = require('express');
var http = require("http").Server(app)
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Hero = require("./heroes")

var url = "mongodb://localhost:27017/heroes";
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(express.static('view'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.post("/hero/add", (req, res)=>{
    console.log(req.body)
    let hero = new Hero(req.body)
    res.send(req.body);
    hero.save((err, data)=>{
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
        return res.send({hero})
    })
})

http.listen(port, function () {
    console.log('listening on *:' + port);
});