import {Response, Request, NextFunction} from 'express'

type MiddlewareAction = (options: MiddlewareActionProps) => any;

interface MiddlewareActionProps {
    response: Response;
    request: Request;
    next: NextFunction;
    cache: Map<string, any>
}

interface MiddlewareOptions {
    name: string;
    route?: string;
    action?: MiddlewareAction;
}

export class Middleware {
    public name: string;
    public route?: string;
    public action?: MiddlewareAction;

    constructor(options: MiddlewareOptions)
}