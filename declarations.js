const escapeStr = "`, \\, /, \"  '"
const arr = [4,'2']
const obj = {
    str : " ",
    num  : 2,
    bool : true,
    undef : undefined
}
const nested = {
    arr:[4,,'2'],
    obj : {
        str : " ",
        num  : 2,
        bool : true
    }
}

Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)

Object.freeze(arr)
Object.freeze(obj)