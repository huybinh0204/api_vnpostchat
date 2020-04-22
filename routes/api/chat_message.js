var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../server');
router.use(bodyParser.json());
/*get  method for create user nhóm chat*/
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM message_personal a INNER JOIN 
    ( SELECT MAX(id) AS id_personal,mesage_personal_id,MAX(date_notification) as date_notification
    FROM message b GROUP BY b.mesage_personal_id ORDER BY b.id DESC ) cm 
    ON (a.id = cm.mesage_personal_id) WHERE group_user LIKE ("%${id}%") ORDER BY cm.id_personal DESC `;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var chat_messagement = {"Chat_personal": "message_personal", "title": rows};
        res.json(chat_messagement);
    })
});
router.get('/pinned/:id', function (req, res, next) {
    const id = req.params.id;
    const sql = `SELECT * FROM message_personal a INNER JOIN 
    ( SELECT MAX(id) AS id_personal,mesage_personal_id,MAX(date_notification) as date_notification
    FROM message b GROUP BY b.mesage_personal_id) cm 
    ON (a.id = cm.mesage_personal_id) WHERE group_user LIKE ("%${id}%") ORDER BY cm.id_personal DESC `;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            res.status(500).send({error: 'Something failed!'});
        }
        var chat_messagement = {"Chat_personal": "message_personal", "title": rows};
        res.json(chat_messagement);
    })
});


module.exports = router;

