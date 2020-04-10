const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.set('views', './views');
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.send('test');
});