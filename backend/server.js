const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/usersModel');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bisenas:Ashwinisb2603@mernapp.rimeyhx.mongodb.net/?retryWrites=true&w=majority&appName=MERNApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Define route to fetch users from the database
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
