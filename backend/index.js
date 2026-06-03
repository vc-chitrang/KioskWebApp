const express = require('express');
const cors = require('cors'); // v1.0.0

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.get('/api/message', (req, res) => {
  res.json({
    message: 'Hello from the Backend!',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
