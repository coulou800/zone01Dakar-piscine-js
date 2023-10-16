function first(params) {
    return params[0]
}
function last(params) {
    return params[params.length-1]
}

function kiss(params) {
    return [last(params),first(params)]
}
