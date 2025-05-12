import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('About us page');
});
app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`Search results for: ${q}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received submission from ${name} with email ${email}`);
});
