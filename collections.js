const arrToSet = (arr) => {
    return new Set(arr)
}

const arrToStr = (arr) => {
    return arr.join("")
}

const setToArr = (set) => {
    return Array.from(set)
}

const setToStr = (set) => {
    return arrToStr(setToArr(set))
}

const strToArr = (str) => {
    return Array.from(str)
}

const strToSet = (str) => {
    return arrToSet(strToArr(str))
}

const mapToObj = (map) => {
    return Object.fromEntries(map.entries())
}

const objToArr = (obj) => {
    return Object.values(obj)
}

const objToMap = (obj) => {
    return new Map(Object.entries(obj))
}

const arrToObj = (arr) => {
    return Object.fromEntries(arr.entries())
}

const strToObj = (str) => {
    return arrToObj(strToArr(str))
}

const superTypeOf = (v) => {
    if (v instanceof Map) {
        return 'Map'
    }
    if (v instanceof Set) {
        return 'Set'
    }
    if (typeof v == "number") {
        return 'Number'
    }
    if (typeof v == "string") {
        return 'String'
    }
    if (v instanceof Array) {
        return 'Array'
    }
    if (typeof v == "function") {
        return 'Function'
    }
    if (v === undefined) {
        return 'undefined'
    }
    if ( v === null) {
        return 'null'
    }
    if (v instanceof Object) {
        return 'Object'
    }
}
