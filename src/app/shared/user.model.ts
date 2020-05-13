export interface User {
    id: number;
    userName: string;
    isAdmin: boolean;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
}


export interface SocialUserModel {
    provider: string;
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    authToken: string;
    idToken: string;
    authorizationCode: string;
    facebook?: any;
    linkedIn?: any;
}
