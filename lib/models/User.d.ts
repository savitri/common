export declare class User {
    _id?: string;
    name: string;
    username: string;
    email?: string;
    photo?: string;
    roleId?: number;
    encryptedPassword?: string;
    notificationPreferences: any;
    recommendations: {
        postId: string;
        title: string;
    }[];
}
export declare class NotificationPreferences {
}
export declare class NotificationType {
    type: "email" | "notification" | "none";
}
