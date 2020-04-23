var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*get  method for create user nhóm chat*/
router.get('/', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM new_post a INNER JOIN USER b ON a.user_id = b.id  ORDER BY a.datetime_news DESC  LIMIT 10`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var new_postment = {"new_post": "new_post", "title": rows};
        res.json(new_postment);
    })
});


module.exports = router;

