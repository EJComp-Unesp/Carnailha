const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AccomodationSchema = new Schema({
    name: String,
    img: String,
    type: String,
    vacancies: String,
    location: String,
    structure: String,
    extras: String,
    contact: String,
    price: String,
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

module.exports = mongoose.model('Accomodation', AccomodationSchema);