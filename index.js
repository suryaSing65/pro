const { response } = require('express');
const express = require('express');
require('./config');
const product = require('./product');

const app = express();
app.use(express.json());

// ***** post api method in mongoose *****
app.post('/create', async (req, res) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(result);
});
app.listen(4000);


// ***** get api method in mongoose *****
app.get('/list', async (req, res) => {
    let data = await product.find();
    res.send(data);
})


// *****  delete method in mongoose *****
app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    res.send(data);
})


// *****  put method in mongoose *****
app.put('/update/:_id', async (req, res) => {
    console.log(req.params);
    let data = await product.updateOne(req.params,
        { $set: req.body }
    );
    res.send(data);
})

// ***** search api with multiple field *****
app.get('/search/:key', async (req, res) => {
    console.log(req.params.key);
    let data = await product.find({
            "$or":[
                {"Brand":{$regex:req.params.key}},
                {"model":{$regex:req.params.key}}
            ]
    });
    res.send(data);
});

// ***** using npm axios modulus *****
// const axios = require('axios');
// axios.get('http://www.google.com').then((response) => {
//       console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// });
