const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // import path
const cors = require('cors'); // import cors
const router = require('./routes/api/items');
const db = require('./config/keys').mongoURI;

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'products/build')));
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors()); // enable cors



mongoose 
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('MongoDB Connected'))
    .catch( err=> console.log(err));


app.use(router)

// Handle requests to non-existing routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'products/build', 'index.html'));
  });

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
