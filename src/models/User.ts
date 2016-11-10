export class User {
    _id?: string;
    name: string;
    username: string;
    email?: string;
    photo?: string;
    roleId?: number; // role_id
    encryptedPassword?: string; // encrypted_password
    notificationPreferences: any;
    recommendations: { postId: string, title: string }[];
}

export class NotificationPreferences {

}

export class NotificationType {
    type: "email" | "notification" | "none";
}
