const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Test Website is Running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log('looking for', id);

    const course = courses.find(cI => cI.id === id) || {};
    res.send(course);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    console.log('looking for', id);

    const checkOut = courses.find(cO => cO.id === id) || {};
    res.send(checkOut);
})

app.listen(port, () => {
    console.log(`Test Website is running on port ${port}`);
})