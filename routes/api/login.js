var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*post method for create product*/ //đăng ký tài khoan
router.post('/login', function(req, res, next) {
    var phone = req.body.phone;
    var pasword = req.body.pasword;
    var sql = `SELECT phone,pasword FROM user WHERE phone=${phone} and pasword=${pasword}`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success',id: result.insertId})
    })
});
/*post method for create product*/
router.post('/login/add', function(req, res, next) {
    var phone = req.body.phone;
    var pasword = req.body.pasword;
    var username = req.body.username;

    var sql = `INSERT INTO user (phone, pasword, username) VALUES ("${phone}", "${pasword}", "${username}")`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success', id: result.insertId})
    })
});

/*put method for update product*/
router.put('/login/update/:id', function(req, res, next) {
    var id = req.params.id;
    var phone = req.body.phone;
    var pasword = req.body.pasword;

    var sql = `UPDATE user SET phone="${phone}", pasword="${pasword}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success'})
    })
});

/*delete method for delete product*/
// router.delete('/delete/:id', function(req, res, next) {
//     var id = req.params.id;
//     var sql = `DELETE FROM user WHERE id=${id}`;
//     db.query(sql, function(err, result) {
//         if(err) {
//             res.status(500).send({ error: 'Something failed!' })
//         }
//         res.json({'status': 'success'})
//     })
// })

module.exports = router;

