const {Schema, model} = require('mongoose');

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

module.exports = model('Category', CategorySchema);
