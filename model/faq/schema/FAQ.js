const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var QuestionSchema = new Schema({
    question: String,
    answer: String,
});
var FAQSchema = new Schema({
    type: String,
    questions: [QuestionSchema],
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