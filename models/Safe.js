const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionalSchema = new Schema({
    key: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    },
});

const safeSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    additional: {
        type: [additionalSchema],
        required: false
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('safe', safeSchema);
