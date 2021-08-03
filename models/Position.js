const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    oldCost: {
        type: Number,
        default: 0
    },
    cost: {
        type: Number,
        required: true
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

module.exports = mongoose.model('Position', PositionSchema);
