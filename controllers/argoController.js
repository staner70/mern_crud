const ArgoModel = require('../models/argoModel');

const argoController = {

    getAllArgos: async (_, res) => {
        
        const argos = await ArgoModel.find({});
        console.log(argos);
        res.json(argos);

    },

    addArgo: async (req, res) => {
        const {name} = req.body;
        const argo = await ArgoModel.create({name});
        res.json(argo);
    }
}

module.exports = argoController;