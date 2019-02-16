const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var YearsSchema = new Schema({
    year: String,
    content: String,
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
var HistorySchema = new Schema({
    content: String,
    years: [YearsSchema],
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

module.exports = mongoose.model('History', HistorySchema);