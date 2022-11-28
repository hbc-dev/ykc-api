import {Express} from 'express';

interface APIOptions {
    routesPath?: string;
    app?: Express;
}

interface EnableRoutesOptions {
    exclude?: Array<string>;
}

type action = () => void;

export class API {
    public routes: Map<string, action>;
    public App: Express;

    constructor(options: APIOptions)

    enableRoutes(options: EnableRoutesOptions): this;

    connect(port: number, callback: (app: Express) => any): this;
}