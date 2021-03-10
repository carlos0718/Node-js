const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.send('Hola Mundo')
})

app.get('/usuario',function(req,res){
    res.send('Usuario : CARLOS')
})
app.post('/',function(req,res){
    res.send('POST del Path')
})
app.listen(port, ()=>{
    console.log(`Server started - Port ${port}`);
});