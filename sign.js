function sign(params) {
    if (params>0) {
        return 1
    } else if (params <0) {
        return -1
    }
    return 0
}

function sameSign(params,params1) {
    return sign(params) == sign(params1)
}