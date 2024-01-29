const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://RajSingh:HkfNdweRawooheX9@cluster0.ol00a7w.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
    
  }

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);



// To connect mongodb localhost

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// // Connection URL
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "mydb";

// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, client) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   const db = client.db(dbName);
// });

