const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    iconName: {
        type: String,
        required: true,
        default: 'icon-home'
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Wallet', WalletSchema);
