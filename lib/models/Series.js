"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joi_1 = require("joi");
var _1 = require(".");
var Series = (function (_super) {
    __extends(Series, _super);
    function Series() {
        _super.apply(this, arguments);
    }
    Series.table = "series";
    Series.schema = joi_1.object().keys({
        title: joi_1.string().required(),
        slug: joi_1.string().required(),
        position: joi_1.number().required(),
        created_at: joi_1.date().default(new Date()),
        updated_at: joi_1.date().default(new Date())
    });
    return Series;
}(_1.DbModel));
exports.Series = Series;
