const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ImagesSchema = new Schema({
    name: String,
    img: String,
    description: String,
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});
var GallerySchema = new Schema({
    gallery_name: String,
    images: [ImagesSchema],
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

module.exports = mongoose.model('Gallery', GallerySchema);