let clone1 = new Object()
let clone2 = new Object()
let samePerson = new Object()
clone1 = Object.assign(clone1, person)
clone2 = Object.assign(clone2, person)
samePerson = person

person.age++
person.country = 'FR'