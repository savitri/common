import { validate, any, AnySchema, Schema, SchemaMap } from "joi";

export type SchemaType = AnySchema<Schema> | SchemaMap;

interface SchemaValidator extends Function {
    schema: SchemaType;
}

export class DbModel<T> {
    model: T;

    static table: string;

    static schema: SchemaType = any();

    constructor(obj: T, doValidate = true) {

        if (doValidate) {

            validate(obj, (<SchemaValidator>this.constructor).schema, (err, value) => {

                if (err) {
                    throw err;
                }

                this.model = value;
            });
        }
        else {

            this.model = obj;
        }
    }
}

export interface DbTable {
    id?: number;
    created_at?: string;
    published_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
