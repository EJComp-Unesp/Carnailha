const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SettingSchema = new Schema({
    year: Number,
    medias: Object,
    palette: Object,
    ini: Date,
    end: Date,
    img: String,
    map: String,
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

module.exports = mongoose.model('Setting', SettingSchema);