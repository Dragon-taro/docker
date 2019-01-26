const express = require('express');
const app = express();

app.use(express.static('src'));

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});