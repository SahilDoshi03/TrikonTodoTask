const express = require('express');
const app = express();
const todos = require('./routes/todos');
const connectDB = require('./db/connect');
const cors = require('cors');

const MONGO_URI="mongodb+srv://sahildsh03:uQ1hxBnVQgmYQ1tw@cluster0.i1ejyyg.mongodb.net/TODOS?retryWrites=true&w=majority"

// middleware

app.use(
  cors({
    origin: "*"
  })
)
app.use(express.json());

// routes

app.use('/', todos);

const port = 3001;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
