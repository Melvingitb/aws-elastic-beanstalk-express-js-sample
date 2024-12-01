const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello CS4650! Review stage has been added to the pipeline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
