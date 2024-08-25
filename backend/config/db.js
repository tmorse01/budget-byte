const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Connected...");
    return client.db("budgetbyte"); // returns the database object
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;
