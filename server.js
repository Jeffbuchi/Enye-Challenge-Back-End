const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send(`Server up and running on port ${PORT}!`);
});


const controlRouter = require('./src/router/index');
app.use(controlRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));