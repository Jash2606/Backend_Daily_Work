const express = require('express');
const app = express();
const fs = require('fs');
const { Server } = require('https');

let courses = [
    {id: 1, name: 'DSA'},
    {id: 2, name: 'WEB_DEV'},
    {id: 3, name: 'REACT'},
    {id: 4, name: 'NODE_JS'},
    {id: 5, name: 'EXPRESS'},
    {id: 6, name: 'MONGODB'},
    {id: 7, name: 'MYSQL'},
    {id: 8, name: 'PYTHON'},
    {id: 9, name: 'JAVA'},
    {id: 10, name: 'C++'},
    {id: 11, name: 'C'},
    {id: 12, name: 'RUBY'}
];

app.get('/courses', (req, res) => {
    res.json(courses);
    // res.send('Hello World');
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});