const mongoose = require('mongoose');

const LenguajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  porcentajeUsoGlobal: Number,
  posicionRankingGlobal: Number,
  posicionRankingChile: Number,
  esPopularComercioChile: Boolean,
  aplicacionesIA: [String],
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lenguaje', LenguajeSchema);