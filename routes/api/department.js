var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*post method for create user*/
router.get('/', function(req, res, next) {
    var sql = `SELECT * FROM department`;
    db.query(sql, function(err,rows, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        var datadepartment = {"department" : "department","title":rows};
        res.json(datadepartment);
    })
});

module.exports = router;

