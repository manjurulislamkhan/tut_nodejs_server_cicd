
import express from 'express';

const app = express();

app.get('/hello', (req, res, next) => {
  res.send('hello back!')
});

app.listen(4000, () => {
  console.info(`Server started on port 4000..`)

})











module.exports = app;
