import express from 'express';
const app = express();

app.get('/', (req, res)=>{
res.send(`This is Affan from sfgdfgfd.`);
console.log('/home route hit, hello1');
})

app.get('/api/user', (req, res)=> {
    res.send("Hello from home")
})

app.listen(8080, '0.0.0.0', ()=>{
console.log("Server is running!");
})
