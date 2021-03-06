const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./controllers/userController");
const medRoutes = require("./controllers/medicationController");
const authRoutes = require("./controllers/authController");
const adminRoutes = require("./controllers/adminController");

const app = express();
const port = process.env.APP_PORT || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
	response.json({ info: "Node.js, Express, and Postgres API", text: "pie" });
});

app.use("/users", userRoutes);
app.use("/medications", medRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
