const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PromoterSchema = new Schema({
    name: String,
    img: String,
    wpp: String,
    email: String,
    face_name: String,
    face_link: String
});
var CitySchema = new Schema({
    city: String,
    promoters : [PromoterSchema]
});
var CaravanSchema = new Schema({
    state: String,
    citys: [CitySchema],
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

module.exports = mongoose.model('Caravan', CaravanSchema);