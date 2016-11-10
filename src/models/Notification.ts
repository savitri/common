// import { Blog } from "./Blog";
// import { Post, Comment } from "./Post";
// import { User } from "./User";

export class Notification {
    _id: string;
    subjectId: string;
    // subjectUrl: string;
    verb: "followed" | "commented" | "replied" | "recommended";
    // object: User | Blog | Post | Comment;
    object: "user" | "blog" | "post" | "comment";
    objectId: string;
    objectWebUrl: string;
    // message: string;
    // parentWebUrl?: string;
    generated: Date;
    read: Date;
    cleared: Date;
}
