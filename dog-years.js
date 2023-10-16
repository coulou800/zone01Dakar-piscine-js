function dogYears(planet, age) {
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
    let earthSec = 31557600
    // let p = earthSec * map[planet]
    let dogYearEarth = (age / earthSec)
    let dogYeaPlanet = (dogYearEarth/map[planet])*7
    return parseFloat(dogYeaPlanet.toFixed(2))

}