function dogYears(planet, age) {
    let earthSec = 31557600
    let map = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    }
    let dogYearEarth = (age / earthSec) * 7
    let dogYeaPlanet = map[planet] * dogYearEarth
    return parseFloat(dogYeaPlanet.toFixed(2))

}
