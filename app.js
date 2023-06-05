import express from "express";
import people from "./routes/people.js";
import login from "./routes/auth.js";
const app = express();

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/login", login);

app.use("/api/people", people);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
