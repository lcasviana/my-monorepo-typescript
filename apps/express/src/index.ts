import express, { Application } from 'express';

const app: Application = express();
const port = 3333;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
