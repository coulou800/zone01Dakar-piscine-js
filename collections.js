arrToSet = (arr) => {
    return new Set(arr)
}

arrToStr = (arr) => {
    return arr.join("")
}

setToArr = (set) => {
    return Array.from(set)
}

setToStr = (set) => {
    return arrToStr(setToArr(set))
}

strToArr = (str) => {
    return Array.from(str)
}

strToSet = (str) => {
    return arrToSet(strToArr(str))
}

mapToObj = (map) => {
    return Object.fromEntries(map.entries())
}

objToArr = (obj) => {
    return Object.values(obj)
}

objToMap = (obj) => {
    return new Map(Object.entries(obj))
}

arrToObj = (arr) => {
    return Object.fromEntries(arr.entries())
}

strToObj = (str) => {
    return arrToObj(strToArr(str))
}