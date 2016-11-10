"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _1 = require(".");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
    }
    Tag.table = "tags";
    return Tag;
}(_1.DbModel));
exports.Tag = Tag;
