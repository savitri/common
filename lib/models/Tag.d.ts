import { DbModel, DbTable } from ".";
export interface ITag extends DbTable {
    slug: string;
    name: string;
    blog_id: number;
    series: boolean;
}
export declare class Tag extends DbModel<ITag> {
    static table: string;
}
