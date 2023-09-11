require("dotenv").config();
const express = require("express");
const cors = require("cors");

const personRoute = require("./routes/person");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", personRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
