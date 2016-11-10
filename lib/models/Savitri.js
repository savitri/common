"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var joi_1 = require("joi");
var _1 = require(".");
var Edition = (function (_super) {
    __extends(Edition, _super);
    function Edition() {
        _super.apply(this, arguments);
    }
    Edition.table = "editions";
    Edition.getEditionsURL = function (year) { return "/savitri/editions" + (year ? "/" + year : ""); };
    Edition.schema = joi_1.object().keys({
        title: joi_1.string().required(),
        desc: joi_1.string(),
        year: joi_1.number().required(),
        toc: joi_1.object().required()
    });
    return Edition;
}(_1.DbModel));
exports.Edition = Edition;
var Part = (function (_super) {
    __extends(Part, _super);
    function Part() {
        _super.apply(this, arguments);
    }
    Part.table = "parts";
    Part.schema = joi_1.object().keys({
        no: joi_1.number().required(),
        edition_id: joi_1.number().required(),
        heading: joi_1.string().required()
    });
    return Part;
}(_1.DbModel));
exports.Part = Part;
var Book = (function (_super) {
    __extends(Book, _super);
    function Book() {
        _super.apply(this, arguments);
    }
    Book.table = "books";
    Book.schema = joi_1.object().keys({
        no: joi_1.number().required(),
        edition_id: joi_1.number().required(),
        part_id: joi_1.number().required(),
        heading: joi_1.string().required(),
        title: joi_1.string().required()
    });
    return Book;
}(_1.DbModel));
exports.Book = Book;
var Canto = (function (_super) {
    __extends(Canto, _super);
    function Canto() {
        _super.apply(this, arguments);
    }
    Canto.table = "cantos";
    Canto.schema = joi_1.object().keys({
        no: joi_1.number().required(),
        book_id: joi_1.number().required(),
        heading: joi_1.string().required(),
        title: joi_1.string().required(),
        desc: joi_1.string()
    });
    return Canto;
}(_1.DbModel));
exports.Canto = Canto;
var Section = (function (_super) {
    __extends(Section, _super);
    function Section() {
        _super.apply(this, arguments);
    }
    Section.table = "sections";
    Section.getSectionsURL = function (book, canto, section) {
        return ("/savitri/books/" + book + "/cantos/" + canto + "/sections/" + section);
    };
    Section.schema = joi_1.object().keys({
        no: joi_1.number().required(),
        running_no: joi_1.number().required(),
        canto_id: joi_1.number().required(),
        heading: joi_1.string().required(),
    });
    return Section;
}(_1.DbModel));
exports.Section = Section;
var Sentence = (function (_super) {
    __extends(Sentence, _super);
    function Sentence() {
        _super.apply(this, arguments);
    }
    Sentence.table = "sentences";
    Sentence.getSectionsURL = function (book, canto, section, sentence) {
        return (Section.getSectionsURL(book, section, canto) + "/sentences/" + sentence);
    };
    Sentence.schema = joi_1.object().keys({
        no: joi_1.number().required(),
        section_id: joi_1.number().required(),
        ref_id: joi_1.string(),
        ref_ids: joi_1.array(),
        lines: joi_1.array().required()
    });
    return Sentence;
}(_1.DbModel));
exports.Sentence = Sentence;
