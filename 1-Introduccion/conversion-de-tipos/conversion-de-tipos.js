//explicit type casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const StringDecimal = '3.14'
const float = parseFloat(StringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//implicit type casting
const sum = '5' + 3
console.log(sum)

const sumWithBoolean  = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const StringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(' - ')
console.log(StringValue + StringValue)
console.log(StringValue + numberValue)
console.log(StringValue + booleanValue)
console.log(numberValue + StringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + StringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)