import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userInformation from "./models/userInformation.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion MongoDB à la DB `test`
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connecté à MongoDB [test]");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ Erreur MongoDB:", err);
});

// Une seule route pour tout envoyer
app.post("/api/form", async (req, res) => {
  try {
    const saved = await userInformation.create(req.body);
    console.log("✔ Données sauvegardées:", saved);
    res.json({ message: "Formulaire enregistré avec succès" });
  } catch (err) {
    console.error("❌ Erreur sauvegarde:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
