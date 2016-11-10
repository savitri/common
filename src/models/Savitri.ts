import { string, number, object, array } from "joi";

import { DbModel, DbTable, SchemaType } from ".";

export interface IEdition extends DbTable {
    title: string;
    desc?: string;
    year: number;
    toc: any;
}

export class Edition extends DbModel<IEdition> {
    static table = "editions";
    static getEditionsURL = (year?: number) => "/savitri/editions" + (year ? `/${year}` : "");

    static schema: SchemaType = object().keys({
        title: string().required(),
        desc: string(),
        year: number().required(),
        toc: object().required()
    });
}

export interface IPart extends DbTable {
    no: number;
    edition_id: number;
    heading: string;
}

export class Part extends DbModel<IPart> {
    static table = "parts";

    static schema: SchemaType = object().keys({
        no: number().required(),
        edition_id: number().required(),
        heading: string().required()
    });
}

export interface IBook extends DbTable {
    no: number;
    edition_id: number;
    part_id: number;
    heading: string;
    title: string;
}

export class Book extends DbModel<IBook> {
    static table = "books";

    static schema: SchemaType = object().keys({
        no: number().required(),
        edition_id: number().required(),
        part_id: number().required(),
        heading: string().required(),
        title: string().required()
    });
}

export interface ICanto extends DbTable {
    no: number;
    book_id: number;
    heading: string;
    title: string;
    desc?: string;
}

export class Canto extends DbModel<ICanto> {
    static table = "cantos";

    static schema: SchemaType = object().keys({
        no: number().required(),
        book_id: number().required(),
        heading: string().required(),
        title: string().required(),
        desc: string()
    });
}

export interface ISection extends DbTable {
    no: number;
    running_no: number;
    canto_id: number;
    heading: string;
    sentences: ISentence[];
}

export class Section extends DbModel<ISection> {
    static table = "sections";

    static getSectionsURL = (book: number, canto: number, section: number) =>
        `/savitri/books/${book}/cantos/${canto}/sections/${section}`;

    static schema: SchemaType = object().keys({
        no: number().required(),
        running_no: number().required(),
        canto_id: number().required(),
        heading: string().required(),
    });
}

export interface ISentence extends DbTable {
    no: number;
    section_id: number;
    ref_id?: string;
    ref_ids?: string[];
    lines: string[];
}

export class Sentence extends DbModel<ISentence> {
    static table = "sentences";

    static getSectionsURL = (book: number, canto: number, section: number, sentence: number) =>
        `${Section.getSectionsURL(book, section, canto)}/sentences/${sentence}`;

    static schema: SchemaType = object().keys({
        no: number().required(),
        section_id: number().required(),
        ref_id: string(),
        ref_ids: array(),
        lines: array().required()
    });
}
