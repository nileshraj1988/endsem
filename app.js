
const express = require('express')
const BodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express()
const RecordSchema = new mongoose.Schema({
    date: String,
    wut:String,
    tos:String,
    mood:String,

  });
const Record = mongoose.model('Record', RecordSchema);
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
});



const port = 3000
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;


app.get("/getdata", async (request, response) => {
    try {
        var result = await Record.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/submit", async (request, response) => {
    try {
        var rec = new Record(request.body);
        var result = await rec.save();
        console.log("inserted");
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});




app.listen(port, () => {
  console.log(`Feedback App listening at http://localhost:${port}`)
  mongoose.connect('mongodb://localhost:27017/tracker', { useUnifiedTopology: true }, {useNewUrlParser: true});
})
