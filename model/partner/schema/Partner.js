const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PartnerSchema = new Schema({
    name: String,
    description: String,
    link: String,
    img: String,
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Partner', PartnerSchema);