//Require express

const express = require(`express`);
// invoking an instance of express
const app = express();
let PORT = 8080;

//Middleware

//route
app.get("/", (req, res) => {
  res.send(`hello my friend`);
});

//listen to my port
app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
