import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userInformation from "./models/userInformation.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


// Middlewares
app.use(cors());
app.use(express.json());

// Connexion MongoDB à la DB `test`
mongoose.connect("mongodb+srv://renderuser:renderpassword2025@information.8niduxu.mongodb.net/?retryWrites=true&w=majority&appName=Information", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB Atlas Error:", err));



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
