const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/upload', require('./routes/api/upload'));
// app.use('/api/doctor', require('./routes/api/doctor'));
app.use('/api/schedules', require('./routes/api/schedules'));
app.use('/api/appointments', require('./routes/api/appointments'));
app.use('/api/contacts', require('./routes/api/contacts'));
app.use('/api/newsletters', require('./routes/api/newsletters'));
app.use('/api/rx', require('./routes/api/reports'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
