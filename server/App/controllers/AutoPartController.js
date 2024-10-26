
const AutoPart = require('../models/AutoPart'); 

// Ajouter une nouvelle pièce auto
exports.addAutoPart = async (req, res) => {
    try {
        const newAutoPart = new AutoPart(req.body);
        await newAutoPart.save();
        res.status(201).json({ message: 'Pièce auto ajoutée avec succès', autoPart: newAutoPart });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la pièce auto', error });
    }
};

// Récupérer toutes les pièces auto
exports.getAllAutoParts = async (req, res) => {
    try {
        const autoParts = await AutoPart.find();
        res.status(200).json(autoParts);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des pièces auto', error });
    }
};

// Récupérer une pièce auto par ID
exports.getAutoPartById = async (req, res) => {
    try {
        const { id } = req.params;
        const autoPart = await AutoPart.findById(id);
        
        if (!autoPart) {
            return res.status(404).json({ message: 'Pièce auto non trouvée' });
        }
        
        res.status(200).json(autoPart);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la pièce auto', error });
    }
};

// Mettre à jour une pièce auto
exports.updateAutoPart = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAutoPart = await AutoPart.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedAutoPart) {
            return res.status(404).json({ message: 'Pièce auto non trouvée' });
        }
        
        res.status(200).json({ message: 'Pièce auto mise à jour', autoPart: updatedAutoPart });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la pièce auto', error });
    }
};

// Supprimer une pièce auto
exports.deleteAutoPart = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAutoPart = await AutoPart.findByIdAndDelete(id);
        
        if (!deletedAutoPart) {
            return res.status(404).json({ message: 'Pièce auto non trouvée' });
        }
        
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la pièce auto', error });
    }
};
