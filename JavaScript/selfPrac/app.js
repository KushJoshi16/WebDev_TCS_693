// Array
let students = []

let shoppinglist = ['cereal', 'cheese','ice']

let arrayCanContainDifferentKingOfValues = [NaN, true, "String", 12]

console.log(arrayCanContainDifferentKingOfValues)

console.log(shoppinglist)
console.log(shoppinglist.length)

console.log(shoppinglist[2])
shoppinglist[1]='Paneer'
console.log(shoppinglist)
shoppinglist[shoppinglist.length] = "Tomato"
console.log(shoppinglist)
console.log(shoppinglist.includes('ice'))
console.log(shoppinglist.includes('cheese'))
console.log(shoppinglist.includes('cereal',1))
console.log(shoppinglist.includes('cereal',0))

console.log(shoppinglist.indexOf('ice'))
console.log(shoppinglist.indexOf('cheese'))

console.log(shoppinglist.indexOf('ice',3))

let letters = ['Q','W','E','R','T','Y']
console.log(letters)

letters.reverse()
console.log(letters)

console.log(letters.join())
console.log(letters.join('-'))
console.log(letters.reverse().join(''))


let animals = ['shark','salmon','whale','bear','lizard','tortoise']


let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);