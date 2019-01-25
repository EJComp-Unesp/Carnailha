const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DrinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min: 1
    },
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

module.exports = mongoose.model('Drink', DrinkSchema);