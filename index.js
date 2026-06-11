import express from 'express';
const app = express();

app.get('/', (req, res)=>{
res.send('Hi, hello');
console.log('/home route hit, hello1');
})

app.listen(8080, '0.0.0.0', ()=>{
console.log("Server is running!");
})
