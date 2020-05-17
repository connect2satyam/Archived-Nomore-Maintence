export interface User {
    userName: string;
    isSocialLogin: boolean;
    isUserLoggedIn: boolean;
    photoUrl: string;
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
