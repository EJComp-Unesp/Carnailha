const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var TestimonialSchema = new Schema({
    name: String,
    testimonial: String,
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

module.exports = mongoose.model('Testimonial', TestimonialSchema);