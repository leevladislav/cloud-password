const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const categoryRoutes = require('./routes/category');
// const walletsRoutes = require('./routes/wallets');
// const orderRoutes = require('./routes/order');
// const positionRoutes = require('./routes/position');

const safeRoutes = require('./routes/safe');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log(error, 'error'));

mongoose.set('useFindAndModify', false);

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/category', categoryRoutes);
// app.use('/api/wallets', walletsRoutes);
// app.use('/api/order', orderRoutes);
// app.use('/api/position', positionRoutes);
app.use('/api/safe', safeRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'client', 'index.html'))
    })
}

module.exports = app;
