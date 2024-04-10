import express from "express";
import cors from "cors";
const app = express();
app.use(express.json()); // ensure this is present so the server can understand JSON data
app.use(cors()); //allows out client to communicate with server without being blocked

app.get("/", function (req, res) {
  res.json("you are looking at my route route");
});

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  //this is the response. currently just sending back what was received from client
  res.json(req.body);
  res.json({ status: "Message received!" });
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
