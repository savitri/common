import { DbModel, DbTable, SchemaType } from ".";
export interface ISeries extends DbTable {
    blog_id: number;
    title: string;
    slug: string;
}
export declare class Series extends DbModel<ISeries> {
    static table: string;
    static schema: SchemaType;
}
