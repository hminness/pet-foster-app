const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express()
require('dotenv').config()
const dbConnectionString = process.env.DB_STRING

let db,
    dbName = 'pet_data',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to db')
        db = client.db(dbName);
        collection = db.collection('pet_info')
    })

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(quotes => {
        res.render('index.ejs', { quotes: quotes })
      })
      .catch(/* ... */)
  })
app.post('/quotes', (req, res) => {
quotesCollection.insertOne(req.body)
    .then(result=> {
        res.redirect('/')
    })
    .catch(error=> console.error(error))
})
app.listen(process.env.PORT || PORT, ()=>{
console.log(`Server is online`)
}) 
app.put('/quotes', (req, res) => {
quotesCollection.findOneAndUpdate(
    { name: 'Yoda' },
    {
        $set: {
        name: req.body.name,
        quote: req.body.quote
        }
    },
    {
        upsert: true
    }
)
.then(result => {e
    res.json('Success')
    })
.catch(error => console.error(error))
})
  app.delete('/quotes', (req,res) => {
    quotesCollection.deleteOne(
        { name: req.body.name }
    )
    .then(result => {
      if (result.deletedCount === 0) {
          return res.json('No quote to delete')
      }
      res.json(`Deleted Darth Vader's quote`)
     })
    .catch(error => console.error(error))
  })
