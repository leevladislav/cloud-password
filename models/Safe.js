const {Schema, model} = require('mongoose');

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
        ref: 'Category',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

module.exports = model('Safe', SafeSchema);
