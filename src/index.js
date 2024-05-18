const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post('/post', (req, res) => {
    res.send("Fez o post")
})

const port = process.env.PORT || 3001;

app.listen(port, () => {})