const is = {}

is.num = (n) => {
    return typeof n == "number"
}

is.nan = (n) => {
    return Number.isNaN(n)
}

is.str = (n) => {
    return typeof n == "string"
}

is.bool = (n) => {
    return typeof n == "boolean"
}

is.undef = (n) => {
    return typeof n == "undefined"
}

is.def = (n) => {
    return typeof n != "undefined"
}
is.arr = (n) => {
    return Array.isArray(n)
}

is.obj = (n) => {
    return typeof n == "object" && !is.arr(n) && n !== null
}

is.fun = (n) => {
    return typeof n == "function"
}

is.truthy = (n) => {
    return n && "dog" == "dog" ? true : false
}

is.falsy = (n) => {
    return !is.truthy(n)
}
console.log(is.obj(is));