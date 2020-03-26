var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../server');
router.use(bodyParser.json());

/* GET home page. */



router.get('/', function(req, res, next) {

    var sql = "SELECT * FROM user";
    db.query(sql, function(err, rowsn, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        }
        const mang = {"user":rowsn};
        res.json(mang);
    })
});
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM user WHERE id=${id}`;
    db.query(sql, function(err, rowsn, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        }
        const mang = {"user":rowsn};
        res.json(mang);
    })
});

module.exports = router;

