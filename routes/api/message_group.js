var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*get  method for create user nhóm chat*/
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM message_personal WHERE status_k = 1 and group_user LIKE ("%${id}%")`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var message_personalment = {"message_personal": "message_personal", "title": rows};
        res.json(message_personalment);
    })
});


module.exports = router;

