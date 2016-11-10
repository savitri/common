"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joi_1 = require("joi");
var getSlug = require("speakingurl");
var Sanscript = require("sanscript");
var Diacritics = require("diacritics");
var _1 = require(".");
var removeDiacritics = Diacritics.remove;
var Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Post.prototype, "slug", {
        get: function () {
            var _a = this.model, script = _a.script, title = _a.title;
            var slug;
            if (script === "ro") {
                slug = getSlug(title);
            }
            else if (script === "dv") {
                slug = getSlug(removeDiacritics(Sanscript.t(title, "devanagari", "iast").replace(/[ṣś]/g, "sh").replace(/[c]/g, "ch")));
            }
            else {
                slug = getSlug(title, { lang: "ar" });
            }
            return slug;
        },
        enumerable: true,
        configurable: true
    });
    Post.table = "posts";
    Post.schema = joi_1.object().keys({
        id: joi_1.number(),
        blog_id: joi_1.number().required(),
        title: joi_1.string().required(),
        content: joi_1.string().required(),
        created_at: joi_1.date().default(new Date()),
        updated_at: joi_1.date().default(new Date()),
        md_content: joi_1.string(),
        excerpt: joi_1.string(),
        url: joi_1.string(),
        published_at: joi_1.date(),
        draft: joi_1.bool(),
        series_title: joi_1.string(),
        subtitle: joi_1.string(),
        show_excerpt: joi_1.string(),
        author_id: joi_1.number().required(),
        featured: joi_1.bool(),
        deleted_at: joi_1.date(),
        number: joi_1.number(),
    });
    return Post;
}(_1.DbModel));
exports.Post = Post;
