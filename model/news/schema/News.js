const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var NewsSchema = new Schema({
    heading: String,
    subheading: String,
    img: String,
    text: String,
    author: String,
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

module.exports = mongoose.model('News', NewsSchema);