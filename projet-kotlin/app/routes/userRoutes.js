// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importation du contrôleur

// Inscription d'un utilisateur
router.post('/register', userController.registerUser);

// Connexion d'un utilisateur
router.post('/login', userController.loginUser);

// Récupérer tous les utilisateurs
router.get('/', userController.getAllUsers);

// Mettre à jour un utilisateur
router.put('/:id', userController.updateUser);

// Supprimer un utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;
