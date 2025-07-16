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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
