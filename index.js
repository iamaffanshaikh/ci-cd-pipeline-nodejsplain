import express from 'express';
const app = express();

app.get('/', (req, res)=>{
res.send('Hi');
console.log('/home route hit');
})

app.listen(8080, '0.0.0.0', ()=>{
console.log("Server is running!");
})
