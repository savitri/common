import { AnySchema, Schema, SchemaMap } from "joi";
export declare type SchemaType = AnySchema<Schema> | SchemaMap;
export declare class DbModel<T> {
    model: T;
    static table: string;
    static schema: SchemaType;
    constructor(obj: T, doValidate?: boolean);
}
export interface DbTable {
    id?: number;
    created_at?: string;
    published_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
