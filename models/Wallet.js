const {Schema, model} = require('mongoose');

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

module.exports = model('Wallet', WalletSchema);
