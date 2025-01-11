const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const hardcodedEmail = "test@example.com";
const hardcodedPassword = "password123";

app.get("/", function (req, res) {
  res.send("Home Page of Express Server");
});

app.post("/create", (req, res) => {
  const { email, password } = req.body;

  if (email === hardcodedEmail && password === hardcodedPassword) {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.json({ success: false, message: "Invalid email or password" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
