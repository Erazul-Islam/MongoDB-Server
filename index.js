const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// RDiUoPFyoSVgWB1t
// coffee-master 


// const uri = "mongodb+srv://<username>:<password>@cluster0.35nuqgc.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://coffee-master:bLQicBogBYvEV3cI@cluster0.35nuqgc.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        app.post('/coffee',async (req,res)=>{
            const newCoffee = req.body;
            console.log(newCoffee)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`coffee server is running:${port}`)
})