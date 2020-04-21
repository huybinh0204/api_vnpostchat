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
        const mang = [{"A": "A", "B": "B", "C": "C", "D": "D", "E": "E", "F": "F", "G": "G", "H": "H","I": "I","J": "J","K": "K",
            "L": "L", "M": "M", "N": "N", "O": "O", "P": "P","Q": "Q","R": "R","S": "S", "T": "T", "U": "U", "V": "V", "W": "W",
            "X": "X","Y": "Y","Z": "Z"
        }];
        var contactsment = {"contacts": "contacts", "text_cv": mang, "title": rows};
        res.json(contactsment);
    })
});

module.exports = router;

