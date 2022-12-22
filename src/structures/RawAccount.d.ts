type Languages = "es" | "en" | "fr"

interface RawAccountProps {
    mail: string;
    username: string;
    language?: Languages;
}

export class RawAccount {
    readonly mail: string;
    readonly username: string;
    readonly language: Languages = "es";
    readonly id: string;
    readonly createdAt: string;
    readonly token: string;

    constructor(options: RawAccountProps)
}