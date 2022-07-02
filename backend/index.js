const connectMongo = require("./db");
const express = require("express");
const app = express();

connectMongo();
const PORT = 3000;
//for passing data between req and res.
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", required("./routes/notes"));

// app.get("/", (req, res) => {
//   res.send("HII");
//   console.log("this is home page");
// });

app.listen(PORT, () => {
  console.log("server listening at 3000");
});
