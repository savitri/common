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
    Post.getPostURL = function (blogSlug, postSlug) {
        return ("/blogs/" + blogSlug + "/posts/" + postSlug);
    };
    Post.schema = joi_1.object().keys({
        id: joi_1.number(),
        blog_id: joi_1.number().required(),
        number: joi_1.number(),
        author_id: joi_1.number().required(),
        slug: joi_1.string().required(),
        title: joi_1.string().required(),
        subtitle: joi_1.string(),
        txt: joi_1.string().required(),
        excerpt: joi_1.string(),
        script: joi_1.string().default("ro"),
        series_id: joi_1.number(),
        comments: joi_1.array(),
        tags: joi_1.array(),
        recommendations: joi_1.array(),
        status: joi_1.string().default("draft"),
        created_at: joi_1.date().required(),
        published_at: joi_1.date(),
        updated_at: joi_1.date(),
        deleted_at: joi_1.date()
    });
    return Post;
}(_1.DbModel));
exports.Post = Post;
