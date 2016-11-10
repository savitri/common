import { string, number, object, date, bool } from "joi";
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
    tags: number[];
    recommendations?: number[];
    status: "draft" | "scheduled" | "published" | "deleted";
}

export class Post extends DbModel<IPost> {
    static table = "posts";
    static schema: SchemaType = object().keys({
        id: number(),
        blog_id: number().required(),
        title: string().required(),
        content: string().required(),
        created_at: date().default(new Date()),
        updated_at: date().default(new Date()),
        md_content: string(),
        excerpt: string(),
        url: string(),
        published_at: date(),
        draft: bool(),
        series_title: string(),
        subtitle: string(),
        show_excerpt: string(),
        author_id: number().required(),
        featured: bool(),
        deleted_at: date(),
        number: number(),
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
