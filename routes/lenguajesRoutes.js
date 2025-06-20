const express = require('express');
const router = express.Router();
const Lenguaje = require('../models/lenguajeModel');

// Obtener top 10 mundial
router.get('/top-global', async (req, res) => {
  try {
    const lenguajes = await Lenguaje.find()
      .sort({ posicionRankingGlobal: 1 })
      .limit(10);
    res.json(lenguajes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener top 5 Chile
router.get('/top-chile', async (req, res) => {
  try {
    const lenguajes = await Lenguaje.find()
      .sort({ posicionRankingChile: 1 })
      .limit(5);
    res.json(lenguajes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener lenguajes LLM para comercio en Chile
router.get('/llm-chile', async (req, res) => {
  try {
    const lenguajes = await Lenguaje.find({ esPopularComercioChile: true });
    res.json(lenguajes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Insertar nuevos datos (para propósitos de prueba)
router.post('/', async (req, res) => {
  const lenguaje = new Lenguaje(req.body);
  try {
    const nuevoLenguaje = await lenguaje.save();
    res.status(201).json(nuevoLenguaje);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;