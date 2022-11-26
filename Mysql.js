const { response } = require('express');
const express = require('express');
const connection = require('./MysqlConfig');
const app = express();
app.use(express.json());

// ***** get api with mysql *****
app.get('/', (req, res) => {
    connection.query("select * from mobile", (err, result) => {
        if (err) {
            res.send('error')
        }
        else {
            res.send(result)
        }
    })
});

// ***** post api with mysql *****
app.post('/', (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO mobile SET ?", data, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
});

// ***** put api with mysql *****
app.put('/', (req, res) => {
    const data = ["redmi", "9500", "note 6", 5];
    connection.query("UPDATE mobile SET brands = ?, price = ?, model = ? where id = ?", data,(error, result) => {
        if (error) throw error;
        res.send(result);
    }) 
})

// ***** delete api with mysql *****
app.delete('/:id',(req,res)=>{
    connection.query("DELETE FROM mobile WHERE id=" + req.params.id,(error,result)=>{
        if (error) throw error;
        res.send(result);
    })
})
app.listen(4000, ()=>{
    console.log("App is running on port 4000",4000)
});