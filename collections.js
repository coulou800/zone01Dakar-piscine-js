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