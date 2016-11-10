export declare class Notification {
    _id: string;
    subjectId: string;
    verb: "followed" | "commented" | "replied" | "recommended";
    object: "user" | "blog" | "post" | "comment";
    objectId: string;
    objectWebUrl: string;
    generated: Date;
    read: Date;
    cleared: Date;
}
