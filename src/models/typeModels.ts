// import {Optional} from "sequelize";

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

// type NoteCreationAttributes = Optional<UserAttributes>;

export interface FirstSectionAttributes {
    id: number;
    title: string;
    content: string;
}