const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Load JSON data
const getData = () => {
  const dataPath = path.join(__dirname, 'database.json');
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

// Sample route
app.get('/api/startups', (req, res) => {
  try {
    const data = getData();
    res.json(data.startups);
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).send('Server error');
  }
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
