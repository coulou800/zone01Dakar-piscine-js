function words(params) {
    return params.split(" ")
}

function sentence(params) {
    return params.join(" ")
}

function yell(params) {
    return params.toUpperCase()
}

function whisper(params) {
    return "*" + params.toLowerCase() + "*"
}

function capitalize(params) {
    return params[0].toUpperCase() + params.substring(1, params.length).toLowerCase()
}

console.log(capitalize('STR'));