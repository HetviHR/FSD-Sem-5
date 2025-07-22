const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.get('/cake',(req,res)=>{
    res.sendFile(__dirname+'/cake.html')
})
app.get('/cake/ahmedabad',(req,res)=>{
    res.send('Hello <b>ahmedabad!!</b>')
})
app.get('/product/:id.:id1',(req,res)=>{
    var id = req.params.id
    var id1 = req.params.id1
    res.send("Params value is " + id + " " + id1)
})
app.get('/search/',(req,res)=>{
    var id = req.query.q
    res.send("Quesry value is " + id)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
