require("dotenv").config();
const express = require("express");
const ConnectDB = require("./Config/db");
const cors = require("cors");

const userRoutes = require("./Routes/userRoutes")



ConnectDB();
const app = express();
app.use(express.json())
app.use(cors());

// Dummy data
const stations = [
  {
    id: 1,
    name: "GreenCharge Hub",
    location: "Islamabad",
    type: "Fast",
    slots: 3,
    totalSlots: 6,
    distance: 2.4,
  },
  {
    id: 2,
    name: "EV Power Station",
    location: "Lahore",
    type: "Standard",
    slots: 5,
    totalSlots: 8,
    distance: 5.1,
  },
  {
    id: 3,
    name: "ChargePoint X",
    location: "Karachi",
    type: "Fast",
    slots: 0,
    totalSlots: 4,
    distance: 1.8,
  },
  {
    id: 1,
    name: "GreenCharge Hub",
    location: "Islamabad",
    type: "Fast",
    slots: 3,
    totalSlots: 6,
    distance: 2.4,
  },
  {
    id: 2,
    name: "EV Power Station",
    location: "Lahore",
    type: "Standard",
    slots: 5,
    totalSlots: 8,
    distance: 5.1,
  },
  {
    id: 3,
    name: "ChargePoint X",
    location: "Karachi",
    type: "Fast",
    slots: 0,
    totalSlots: 4,
    distance: 1.8,
  },
];

// Route to return dummy data
app.get("/stations", (req, res) => {
  res.json(stations);
});

app.use("/ev/api", userRoutes);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("Backend running on port 9000"));

// const Groq = require("groq-sdk");
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
// groq.models.list().then(res => {
//   console.log("YOUR GROQ MODELS:", res.data.map(m => m.id));
// }).catch(e => console.log("GROQ ERROR:", e.message));