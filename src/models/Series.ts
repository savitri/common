import { string, number, object, date } from "joi";

import { DbModel, DbTable, SchemaType } from ".";

export interface ISeries extends DbTable {
    blog_id: number;
    title: string;
    slug: string;
}

export class Series extends DbModel<ISeries> {
    static table = "series";

    static schema: SchemaType = object().keys({
        title: string().required(),
        slug: string().required(),
        position: number().required(),
        created_at: date().default(new Date()),
        updated_at: date().default(new Date())
    });
}
