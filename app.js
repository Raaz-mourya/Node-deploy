require("dotenv").config();
const express = require("express");
// const morgan = require("morgan");
const mongoose = require("mongoose");
const server = express();
const cors = require('cors');
const path = require('path');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}


//bodyParser
server.use(cors());
server.use(express.json());
// server.use(morgan("default"));   // logging file
server.use('/', express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'build','index.html')); // resolve to make path
});


// server listening
server.listen(process.env.PORT, () => {
  console.log(`server listen on port ${process.env.PORT}`);
});
