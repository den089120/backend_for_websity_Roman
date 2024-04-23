
export enum Role {
    USER = 'USER',
    ADMINISTRATOR = 'ADMINISTRATOR'
}

export interface UserAttributes {
    id: number;
    email: string;
    password: string;
    role: Role;
}

export interface FirstSectionAttributes {
    id: number;
    title: string;
    content: string;
}