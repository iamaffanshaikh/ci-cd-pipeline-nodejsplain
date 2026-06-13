import express from 'express';
const app = express();

app.get('/', (req, res)=>{
res.send(`This is Affan from server.`);
console.log('/home route hit, hello1');
})

app.get('/home', (req, res)=> {
    res.send("Hello from home")
})

app.listen(8080, '0.0.0.0', ()=>{
console.log("Server is running!");
})
