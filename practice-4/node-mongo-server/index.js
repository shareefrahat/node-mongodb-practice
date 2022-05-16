const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const objectId = require("mongodb").ObjectId;
const port = process.env.PORT || 5000;
require("dotenv").config();

//------------Call App-------------\\

const app = express();

//-----------Middleware-------------\\

app.use(express.json());
app.use(cors());

//-----------MongoDB-----------------\\
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6olzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// client.connect((err) => {
//   console.log("DB connected");
//   const productCollection = client.db("Decorium").collection("products");

//   app.get("/products", async (req, res) => {
//     const query = {};
//     const cursor = productCollection.find(query);
//     const products = await cursor.toArray();
//     res.send(products);
//   });

//   // client.close();
// });

async function run() {
  try {
    await client.connect();
    console.log("DB connected");
    const productCollection = client.db("TestProducts").collection("products");

    //------------READ : find()-----------------\\
    app.get("/products", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });

    //------------CREATE : insert()-----------------\\
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });

    //------------DELETE : delete()-----------------\\
    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: objectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    //------------UPDATE : update()-----------------\\
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updateProduct = req.body;
      const filter = { _id: objectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: updateProduct,
      };
      const result = await productCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

//--------------Root Api-----------------\\

app.get("/", (req, res) => {
  res.send("My node server is running");
});

//--------------Listening Port----------------\\

app.listen(port, () => {
  console.log("Listening Port", port);
});
