import {Express} from 'express';

interface APIOptions {
    routesPath?: string;
    middlewarePath?: string;
    app?: Express;
}

interface EnableRoutesOptions {
    exclude?: Array<string>;
}

interface EnableMiddlewareOptions {
    exclude?: Array<string>;
}

type action = () => void;

export class API {
    public routes: Map<string, action>;
    public App: Express;

    constructor(options: APIOptions)

    enableRoutes(options: EnableRoutesOptions): this;

    enableMiddleware(options: EnableMiddlewareOptions): this;

    connect(port: number, callback: (app: Express) => any): this;
}