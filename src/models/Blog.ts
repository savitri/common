import { string, number, object, date } from "joi";

import { DbModel, DbTable, IPost, SchemaType } from ".";

export interface IBlog extends DbTable {
    title: string;
    subtitle?: string;
    slug: string;
    authors: number[];
    order: number;
    posts?: IPost[];
}

export class Blog extends DbModel<IBlog> {
    static table = "blogs";

    static getBlogsURL = (slug?: string) => "/blogs" + (slug ? `/${slug}` : "");

    static schema: SchemaType = object().keys({
        title: string().required(),
        slug: string().required(),
        position: number().required(),
        created_at: date().default(new Date()),
        updated_at: date().default(new Date())
    });
}
