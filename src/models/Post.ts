import { string, number, object, date, array } from "joi";
import * as getSlug from "speakingurl";
import * as Sanscript from "sanscript";
import * as Diacritics from "diacritics";

import { DbModel, DbTable, SchemaType } from ".";

const removeDiacritics = Diacritics.remove;

export interface IPost extends DbTable {
    blog_id: number;
    number?: number;
    author_id: number;
    slug: string;
    title: string;
    subtitle?: string;
    txt: string;
    excerpt?: string;
    script: "ro" | "dv" | "ar";
    series_id?: number;
    comments?: number[];
    tags?: number[];
    recommendations?: number[];
    created_at: string;
    status: "draft" | "scheduled" | "published" | "deleted";
}

export class Post extends DbModel<IPost> {
    static table = "posts";

    static getPostURL = (blogSlug: string, postSlug: string) =>
        `/blogs/${blogSlug}/posts/${postSlug}`;

    static schema: SchemaType = object().keys({
        id: number(),
        blog_id: number().required(),
        number: number(),
        author_id: number().required(),
        slug: string().required(),
        title: string().required(),
        subtitle: string(),
        txt: string().required(),
        excerpt: string(),
        script: string().default("ro"),
        series_id: number(),
        comments: array(),
        tags: array(),
        recommendations: array(),
        status: string().default("draft"),
        created_at: date().required(),
        published_at: date(),
        updated_at: date(),
        deleted_at: date()
    });

    get slug() {

        const { script, title } = this.model;

        let slug: string;

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
    }
}
