import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
//import { MongoClient } from 'mongodb'

const app = express()
devBundle.compile(app) // only in dev should this be used

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})


/* const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/p1' */
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://yguezide:Qv4DGMKpBhIqJplW@testdb.kpbihfl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: "ServerApiVersion.v1" });

client.connect(err => {
    console.error(err);
    client.close();
});