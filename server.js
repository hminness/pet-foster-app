const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
require('dotenv').config();

const dbConnectionString = process.env.DB_STRING;

let db,
    dbName = 'sample_mflix',
    collection;

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to db')
        db = client.db(dbName);
        collection = db.collection('movies')
    })