const express = require('express');
const router = express.Router();
const autoPartController = require('../controllers/autoPartController'); 

// Ajouter une nouvelle pièce auto
router.post('/', autoPartController.addAutoPart);

// Récupérer toutes les pièces auto
router.get('/', autoPartController.getAllAutoParts);

// Récupérer une pièce auto par ID
router.get('/:id', autoPartController.getAutoPartById);

// Mettre à jour une pièce auto
router.put('/:id', autoPartController.updateAutoPart);

// Supprimer une pièce auto
router.delete('/:id', autoPartController.deleteAutoPart);

module.exports = router;
