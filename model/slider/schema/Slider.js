const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SlidesSchema = new Schema({
    title: String,
    description: String,
    img: String,
    link: String,
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
var SliderSchema = new Schema({
    active_amount: Number,
    slides: [SlidesSchema],
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

module.exports = mongoose.model('Slider', SliderSchema);