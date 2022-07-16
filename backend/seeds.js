/* mySeedScript.js */

// require the necessary libraries
//const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
  // Connection URL
  const uri = process.env.MONGODB_URI;
  console.log(`uri ${uri}`);
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db("admin");

    try {
      db.createCollection("users");
      db.createCollection("items");
      db.createCollection("comments");
    } catch (e) {
      console.log("failed creating", e);
    }
    const usersResult = await insertUsersCollection(db.collection("users"));
    const itemsResult = await insertItemsCollection(db.collection("items"));
    console.log(itemsResult["0"]);
    const commentsResult = await insertCommentsCollection(
      db.collection("items"),
      itemsResult["0"]
    );

    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: "User",
    documents: [
      {
        name: "username",
        value: "user1",
      },
      {
        name: "email",
        value: "jon@doe.com",
      },
      {
        name: "bio",
        value: "bla bla",
      },
      {
        name: "image",
        value: "bla bla.png",
      },
    ],
  },
];
async function insertUsersCollection(collection) {
  try {
    await collection.drop();
  } catch (error) {
    console.log("collection wasn't dropped:", { error });
  }

  // make a bunch of time series data
  let users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
      user: `user${i}`,
      email: `user${i}@gmail.com`,
      bio: "bla bla",
      image: "blabla.png",
    });
  }
  const result = await collection.insertMany(users);
  console.log("finish insert users");
  return result;
}
async function insertItemsCollection(collection) {
  try {
    await collection.drop();
  } catch (error) {
    console.log("collection wasn't dropped:", { error });
  }

  // make a bunch of time series data
  let items = [];

  for (let i = 1; i <= 100; i++) {
    items.push({
      title: `title${i}`,
      description: `item${i}`,
      image: "blabla.png",
      createdAt: "2022-06-27T19:18:54.429+00:00",
      updatedAt: "2022-06-27T19:19:05.059+00:00",
    });
  }
  const result = await collection.insertMany(items);
  console.log("finish insert items");
  return result.insertedIds;
}
async function insertCommentsCollection(collection, parentItemId) {
  try {
    await collection.drop();
  } catch (error) {
    console.log("collection wasn't dropped:", { error });
  }

  // make a bunch of time series data
  let comments = [];

  for (let i = 1; i <= 100; i++) {
    comments.push({
      body: `body${i}`,
      parentItemId: parentItemId,
      createdAt: "2022-06-27T19:18:54.429+00:00",
      updatedAt: "2022-06-27T19:19:05.059+00:00",
    });
  }
  const result = await collection.insertMany(comments);
  console.log("finish insert comments");
  return result.insertedIds;
}
