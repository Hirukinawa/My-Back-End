const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/post', (req, res) => {
    res.send("Fez o post")
})

app.listen(port, () => {})