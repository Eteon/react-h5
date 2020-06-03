export function isNumber(value) {
    return typeof value === 'number';
}

export function isObject(obj, call) {
    if (!call) {
        return typeof obj === 'object';
    } else {
        return Object.prototype
            .toString.call(obj) === '[object Object]';
    }
}

export function isString(value) {
    return typeof value === 'string'
        && value.constructor === String;
}

export function isSignificant(value) {
    if (value === undefined || value === null
        || (isString(value) ? value.length === 0 : false)
    ) {
        return false
    } else {
        return true;
    }
}

export function isFunction(fn, call) {
    if (!call) {
        return (
            !!fn
            && !fn.nodename
            && fn.constructor !== String
            && fn.constructor !== RegExp
            && fn.constructor !== Array
            && /function/i.test(fn + "")
        );
    } else {
        return Object.prototype
            .toString.call(fn) === '[object Function]';
    }
}