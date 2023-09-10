const express = require("express");
const cors = require("cors");

const personRoute = require("./routes/person");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", personRoute);

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
