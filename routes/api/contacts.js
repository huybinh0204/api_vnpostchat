var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*post method for create user*/
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT  a.id,a.username,a.phone,a.image,a.datetime_contacts FROM contacts a INNER JOIN USER  b ON a.phone = b.phone WHERE a.user_id=${id}`;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        // const mang = [{"A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F", "G": "G", "H": "H","I": "I","J": "J","K": "K",
        //     "L": "L", "M": "M", "N": "N", "O": "O", "P": "P","Q": "Q","R": "R","S": "S", "T": "T", "U": "U", "V": "V", "W": "W",
        //     "X": "X","Y": "Y","Z": "Z"
        // }];
        var contactsment = {"contacts": "contacts", "title": rows};
        res.json(contactsment);
    })
});
/*post method for create user*/
router.post('/add', function(req, res, next) {
    var username = req.body.username;
    var phone = req.body.phone;
    var image = req.body.image;
    var user_id = req.body.user_id;
    var sql = `INSERT INTO contacts (user_id,username,phone,image) VALUES ("${user_id}","${username}","${phone}","${image}")`;
    db.query(sql, function(err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
        }
        res.json({'status': 'success', id: result.insertId})
    })
});
// router.put('/update', function(req, res, next) {
//     var username = req.body.username;
//     var phone = req.body.phone;
//     var image = req.body.image;
//     var user_id = req.body.user_id;
//     var sql = `UPDATE user SET username="${username}", image="${image}" WHERE phone=${phone}`;
//     var sql = `INSERT INTO contacts (user_id,username,phone,image) VALUES ("${user_id}","${username}","${phone}","${image}")`;
//     db.query(sql, function(err, result) {
//         if(err) {
//             res.status(500).send({ error: 'Something failed!' })
//         }
//         res.json({'status': 'success', id: result.insertId})
//     })
// });
module.exports = router;

