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

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log(superTypeOf(map)) //         -> 'Map'
console.log(superTypeOf(set)) //         -> 'Set'
console.log(superTypeOf(obj)) //         -> 'Object'
console.log(superTypeOf(str)) //         -> 'String'
console.log(superTypeOf(666)) //         -> 'Number'
console.log(superTypeOf(NaN)) //         -> 'Number'
console.log(superTypeOf(arr)) //         -> 'Array'
console.log(superTypeOf(null)) //        -> 'null'
console.log(superTypeOf(undefined)) //   -> 'undefined'
console.log(superTypeOf(superTypeOf)) // -> 'Function'