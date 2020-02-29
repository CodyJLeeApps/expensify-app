// // object destructuring
// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'CLT',
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Book Name',
//     author: 'tbd tbd',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher
// console.log(publisherName);

// array destructuring
const address = ['12299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'Unknown', zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, smallPrice, medPrice, largePrice] = item;
console.log(`A Med. ${name} costs ${medPrice}`);