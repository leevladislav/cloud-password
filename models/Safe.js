const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdditionalSchema = new Schema({
    key: {
        type: String,
        required: false
    },
    value: {
        type: String,
        required: false
    },
});

const SafeSchema = new Schema({
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
        required: false
    },
    password: {
        type: String,
        required: false
    },
    additional: {
        type: [AdditionalSchema],
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

module.exports = mongoose.model('Safe', SafeSchema);
