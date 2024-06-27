import { _safe_object_assign_ } from "../utils";

export interface IRequestCacheOptions {
    key?: string;
}

export default function requestCache(opts: IRequestCacheOptions) {
    const { key = '__node_req_cache__' } = opts;
    return function (req: Request, res: Response, next: NextFunction) {
        req[key] = _safe_object_assign_(req[key], {
            ttl: 5 * 60 * 60
        });
        next();
    }
}