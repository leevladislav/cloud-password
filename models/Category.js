const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Category', CategorySchema);
