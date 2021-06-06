const mongoose = require('mongoose');

const ArgoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
    }
})

const Argo = mongoose.model('Argo', ArgoSchema);

module.exports = Argo;