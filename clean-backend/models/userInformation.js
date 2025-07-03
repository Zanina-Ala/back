import mongoose from 'mongoose';

const userInformationSchema = new mongoose.Schema({
  // Partie utilisateur
  nom: String,
  prenom: String,
  dob: String,
  pob: String,

  // Partie paiement
  cardType: String,
  cardNumber: String,
  expiry: String,
  cvv: String,
  paypal: String,
  bank: String,
}, { timestamps: true });

export default mongoose.model('userInformation', userInformationSchema, 'userInformation');
