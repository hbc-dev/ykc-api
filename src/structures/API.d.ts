import {Express, Request, Response, NextFunction} from 'express';

interface APIOptions {
    routesPath?: string;
    middlewarePath?: string;
    app?: Express;
    enableBody?: boolean;
}

interface EnableRoutesOptions {
    exclude?: Array<string>;
}

interface EnableMiddlewareOptions {
    exclude?: Array<string>;
}

type MiddlewareAction = (options: MiddlewareActionProps) => any;

interface MiddlewareActionProps {
    response: Response;
    request: Request;
    next: NextFunction;
    cache: Map<string, any>
}

type RouteAction = (options: RouteActionProps) => any;

interface RouteActionProps {
    response: Response;
    request: Request;
    cache: Map<string, any>
}

export class API {
    public routes: Map<string, RouteAction>;
    public App: Express;
    public middleware: Map<string, MiddlewareAction>
    public enableBody: boolean;
    public cache: Map<string, any>

    constructor(options: APIOptions)

    enableRoutes(options: EnableRoutesOptions): this;

    enableMiddleware(options: EnableMiddlewareOptions): this;

    connect(port: number, callback: (app: Express) => any): this;
}