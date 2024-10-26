const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://App_Mobile_Vente_Achat_des_pi-ces_auto:cKy3QVkFggjbjEtO@cluster0.eygwe.mongodb.net/', 
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Importation des routes
app.use('/api/users', require('./App/routes/userRoutes'));
app.use('/api/parts', require('./App/routes/autoPartRoutes'));


app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

let PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});