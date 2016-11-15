import { DbModel, DbTable, IPost, SchemaType } from ".";
export interface IBlog extends DbTable {
    title: string;
    subtitle?: string;
    slug: string;
    authors: number[];
    order: number;
    posts?: IPost[];
}
export declare class Blog extends DbModel<IBlog> {
    static table: string;
    static getBlogsURL: (slug?: string | undefined) => string;
    static getPostsURL: (blogSlug: string, page?: number | undefined) => string;
    static schema: SchemaType;
}
