// User: ph-news   pass: 91ABzrlhz3yXrnLm

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ph-news:91ABzrlhz3yXrnLm@cluster0.5xecsyp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const newsCollection = client.db("ph-news").collection("news");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "Success", statur: 200, data: news });
    }
    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.send(result);
    }
  } finally {
  }
}
// run().catch(console.dir);
export default run;
