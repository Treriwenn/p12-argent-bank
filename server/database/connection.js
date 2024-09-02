const mongoose = require('mongoose');
const dotenv = require("dotenv").config({ encoding: "latin1" });

const databaseUrl = process.env.DATABASE_URL;
module.exports = async () => {
  try {
    // Connexion à la base de données MongoDB
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connexion à la base de données réussie');
  } catch (error) {
    // Gestion des erreurs de connexion
    console.error(`Erreur de connexion à la base de données : ${error}`);
    throw new Error(error);
  }
};
