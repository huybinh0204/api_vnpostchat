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

        const mang = {"A":rowsn,"B":rowsn,"C":rowsn};
        const mangm = {"mangtong" : mang};
        res.json(mangm);
    })
});
// router.get('/:id', function(req, res, next) {
//     const id = req.params.id;
//     const sql = `SELECT * FROM user WHERE id=${id}`;
//     db.query(sql, function(err, rowsn, fields) {
//         if (err) {
//             res.status(500).send({ error: 'Something failed!' });
//         }
//         const mang = {"user":rowsn};
//         res.json(mang);
//     })
// });
/*post method for create product*/ //đăng ký tài khoan
// router.post('/create', function(req, res, next) {
//     var phone = req.body.phone;
//     var phone = req.body.phone;
//     var sql = `INSERT INTO user (phone) VALUES ("${phone}")`;
//     db.query(sql, function(err, result) {
//         if(err) {
//             res.status(500).send({ error: 'Something failed!' })
//         }
//         res.json({'status': 'success', id: result.insertId})
//     })
// });

/*put method for update product*/
// router.put('/update/:id', function(req, res, next) {
//     var id = req.params.id;
//     var phone = req.body.phone;
//     var phone = req.body.phone;
//     var sql = `UPDATE user SET phone="${phone}"  WHERE id=${id}`;
//     db.query(sql, function(err, result) {
//         if(err) {
//             res.status(500).send({ error: 'Something failed!' })
//         }
//         res.json({'status': 'success'})
//     })
// });

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

