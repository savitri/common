import { DbModel } from ".";
export interface IComment {
    id?: number;
    post_id: number;
    parent_id?: number;
    user_id: number;
    body: string;
    created_at: Date;
    updated_at: Date;
}
export declare class Comment extends DbModel<IComment> {
    static table: string;
}
