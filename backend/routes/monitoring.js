var express = require('express');
var router = express.Router();
var monitorings = require('../monitoring.json');

const filename = './monitoring.json';
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.send(monitorings)
});

router.get('/:id', function (req, res, next) {
    // var id = parseInt(req.params.id, 10)
    var id = req.params.id
    var tt= monitorings.filter(function (test) {
        return test.id === id
    });
    res.send(tt)
});

router.post('/', function (req, res, next) {

    // new Date().toString()
    monitorings.push(req.body)

    fs.writeFileSync(filename, JSON.stringify(monitorings), 'utf8', (err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
    })

    //     .then(post => res.status(201).json({
    //     message: `The post #${req.body.id} has been created`,
    //     content: post
    // }))
    //     .catch(err => res.status(500).json({ message: err.message }))

    res.send('new monitoring. id: ' + req.id)
});

module.exports = router;