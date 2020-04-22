var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*get  method for create user nhóm chat*/
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM message_personal WHERE status_k = 0 and status_personal = 1 and group_user LIKE ("%${id}%")`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var message_personalment = {"contacts": "contacts", "title": rows};
        res.json(message_personalment);
    })
});
/*get  method for create user nhóm chat*/
router.get('/create/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM message_personal WHERE status_k = 0 and status_personal = 2 and user_id = ${id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var message_personalment = {"contacts": "contacts", "title": rows};
        res.json(message_personalment);
    })
});
/*delete method for delete product*/
router.delete('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = `DELETE FROM message_personal WHERE id=${id}`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success'})
    })
})

module.exports = router;

