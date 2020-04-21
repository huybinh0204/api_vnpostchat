var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*get method for update product*/
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM user WHERE id=${id}`;
    db.query(sql, function(err, rows, fields) {
        if (err) {
            res.status(500).send({ error: 'Something failed!' });
        }
        var userment = {"user" : "user","title":rows};
        res.json(userment);
    })
});
/*put method for update product*/
router.put('/update/:id', function(req, res, next) {
    var id = req.params.id;
    var department_id = req.body.department_id;
    var level = req.body.level;
    var mnv = req.body.mnv;
    var address = req.body.address;
    var email = req.body.email;
    var birthday = req.body.birthday;

    var sql = `UPDATE user SET department_id="${department_id}", level="${level}" ,mnv="${mnv}", address="${address}" ,email="${email}", birthday="${birthday}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success'})
    })
});
router.put('/link_avatar/:id', function(req, res, next) {
    var id = req.params.id;
    var link_avatar = req.body.link_avatar;
    var link_cover = req.body.link_cover;

    var sql = `UPDATE user SET link_avatar="${link_avatar}" ,link_cover="${link_cover}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success'})
    })
});


module.exports = router;

