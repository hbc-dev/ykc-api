import {Response, Request} from 'express'

type RouteAction = (options: RouteActionProps) => any;
type types = 'get' | 'post' | 'put' | 'delete';

interface RouteActionProps {
    response: Response;
    request: Request;
}

interface RouteOptions {
    name: string;
    route?: string;
    action?: RouteAction;
    type?: types = 'get'; 
}

export class Route {
    public name: string;
    public route?: string;
    public action?: RouteAction;
    public type?: types = 'get';

    constructor(options: RouteOptions)
}