import express from 'express';
const app = express();

app.get('/', (req, res)=>{
res.send(`This is Affan.`);
console.log('/home route hit, hello1');
})

app.get('/api/user', (req, res)=> {
    res.send("Hello from home")
})

app.get('/health', (req, res)=> {
    res.send({ "health-v1" : "ok"})
})

app.listen(3002, '0.0.0.0', ()=>{
console.log("Server is running!");
})
