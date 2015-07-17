var express = require('express');
var assert = require('assert');
var router = express.Router();
var crypto = require('crypto');
var Adv = require('../models/adv');

function getAdvs(callback) {
    Adv.find(function (err, data) {
        assert.ifError(err);
        callback(data);
    })
}
/* GET home page. */
router.get('/', function(req, res, next) {
    getAdvs(function (data) {
        res.render('index', { advs: data });
    });
});

module.exports = router;
