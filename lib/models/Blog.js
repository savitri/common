"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joi_1 = require("joi");
var _1 = require(".");
var Blog = (function (_super) {
    __extends(Blog, _super);
    function Blog() {
        _super.apply(this, arguments);
    }
    Blog.table = "blogs";
    Blog.getBlogsURL = function (slug) { return "/blogs" + (slug ? "/" + slug : ""); };
    Blog.schema = joi_1.object().keys({
        title: joi_1.string().required(),
        slug: joi_1.string().required(),
        position: joi_1.number().required(),
        created_at: joi_1.date().default(new Date()),
        updated_at: joi_1.date().default(new Date())
    });
    return Blog;
}(_1.DbModel));
exports.Blog = Blog;
