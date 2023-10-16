function getAcceleration(param) {
    if (param.m === 0) {
        return "impossible";
    }
    if (param.Δv !== undefined && param.Δt !== undefined) {
        return param.Δv / param.Δt;
    } else if (param.f !== undefined && param.m !== undefined) {
        return param.f / param.m;
    } else if (param.d !== undefined && param.t !== undefined) {
        return (2 * param.d) / (param.t ** 2);
    } else {
        return "impossible";
    }
}
