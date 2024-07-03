const express = require('express');
const app = express();
const fs = require('fs');
const { Server } = require('https');
app.use(express.json());

let courses = [
    {id: 1, name: 'DSA', duration: '3 months'},
    {id: 2, name: 'WEB_DEV', duration: '2 months'}
    // {id: 3, name: 'REACT', duration: '1.5 months'},
    // {id: 4, name: 'NODE_JS', duration: '2 months'},
    // {id: 5, name: 'EXPRESS', duration: '1 month'},
    // {id: 6, name: 'MONGODB', duration: '1.5 months'},
    // {id: 7, name: 'MYSQL', duration: '1 month'},
    // {id: 8, name: 'PYTHON', duration: '3 months'},
    // {id: 9, name: 'JAVA', duration: '3 months'},
    // {id: 10, name: 'C++', duration: '2 months'},
    // {id: 11, name: 'C', duration: '1 month'},
    // {id: 12, name: 'RUBY', duration: '1.5 months'}
];

console.log("Hello World");
app.get('/courses', (req, res) => {
    console.log(req.body);
    console.log("Hellow World");
    res.json(courses);
    // res.send('Hello World');
});

app.post('/courses', (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        duration: req.body.duration
    };
    courses.push(newCourse);
    res.json(newCourse);
});


app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (!course) {
        return res.status(404).send('Course not found');
    }
    course.name = req.body.name || course.name;
    course.duration = req.body.duration || course.duration;
    res.json(course);
});


app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }
    const deletedCourse = courses.splice(courseIndex, 1);
    res.json(deletedCourse);
});


const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

