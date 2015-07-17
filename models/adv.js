/**
 * Created by wangchaofan on 15/7/16.
 */
"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.Object;

var advertisementSchema = new Schema({
    name: { type: String },
    img_url: { type: String },
    link_url: { type: String }
});

module.exports = mongoose.model('Advertisement', advertisementSchema);