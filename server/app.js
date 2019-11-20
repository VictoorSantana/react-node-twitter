const express = require('express');
const app = express();
const cors = require('cors');
const monk = require('monk');

const db = monk('localhost/mydb');
const myTwitterMessageMonk = db.get('mytwittermessage');

app.use(cors());
app.use(express.json());

app.get('/getMessages', (req,res) => {

    myTwitterMessageMonk.find({}).then((docs) => {
        res.status(200).json(docs);
    });
});


app.post('/addMessage', (req,res) => {
    console.log(req.body);

    if(req.body.name.toString().trim().length > 0 &&
       req.body.message.toString().trim().length > 0) {

        const dataMsg = {
            name: req.body.name.toString(),
            message: req.body.message.toString()
        }

        myTwitterMessageMonk.insert(dataMsg);

        res.status(200).json({ msg: 'ok' });
    } else {
        res.status(400).json({ msg: 'fields are missing' });
    }    

    
});


app.listen(5000, () => {
    console.log('mytwitter server is online');
});