const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true }
});

module.exports = mongoose.model('Startup', startupSchema);
