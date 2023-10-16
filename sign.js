function sign(params) {
    if (params>0) {
        return 1
    } else if (params <0) {
        return -1
    }
    return 0
}

function sameSign(params,params1) {
    return (params >0 && params1 >0) || (params<0&&params1<0)
}