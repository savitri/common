export declare class Follower {
    _id: string;
    userId: string;
    username: string;
}
export declare class Popularity {
    _id: string;
    type: "post" | "blog" | "series";
    typeId: string;
    followers: {
        userId: string;
        username: string;
    }[];
}
