export function _safe_object_assign_<T>(o: T, v: Record<keyof T, T[keyof T]>): T {
    if (!o) o = {};
    for (let key in v) {
        if (v.hasOwnProperty(key)) {
            o[key] = v[key];
        }
    }
    return o;
}