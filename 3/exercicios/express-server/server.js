const express = require('express');
const app = express();

app.get('/',(res, req)=>{
    res.send('testando o server');
})