type Languages = "es" | "en" | "fr"

interface RawAccountProps {
    mail: string;
    username: string;
    language?: Languages;
}

export class RawAccount {
    readonly mail: string;
    readonly username: string;
    readonly language?: Languages = "es";

    constructor(options: RawAccountProps)
}