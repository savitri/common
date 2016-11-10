"use strict";
var joi_1 = require("joi");
var DbModel = (function () {
    function DbModel(obj, doValidate) {
        var _this = this;
        if (doValidate === void 0) { doValidate = true; }
        if (doValidate) {
            joi_1.validate(obj, this.constructor.schema, function (err, value) {
                if (err) {
                    throw err;
                }
                _this.model = value;
            });
        }
        else {
            this.model = obj;
        }
    }
    DbModel.schema = joi_1.any();
    return DbModel;
}());
exports.DbModel = DbModel;
