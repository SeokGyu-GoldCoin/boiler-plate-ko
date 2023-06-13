const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ksk4096:aldud7710@ksk001.uvlxqtq.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
}).then(()=>{console.log('MongoDB Connected...')})
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})