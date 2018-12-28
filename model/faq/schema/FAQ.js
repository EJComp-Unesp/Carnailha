const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FAQSchema = new Schema({
    question: String,
    answer: String,
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

module.exports = mongoose.model('FAQ', FAQSchema);