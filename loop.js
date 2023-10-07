//for the given JSON iterate over all the for loops(for,for in,for of,forEach)

// for loop
//The for statement defines a code block that is executed as long as a condition is true.
//example:program to display text 5 times
const n = 5;
for (let i = 1; i <= n; i++) {
    console.log(`for loop`);
}
//---------------------------------------------------------------------
//for in
//The for...in statements combo iterates (loops) over the properties of an object.
//The code block inside the loop is executed once for each property.
//example:
const student = {
    name: 'Monica',
    class: 7,
    age: 12
}
for ( let key in student ) {
    console.log(`${key} => ${student[key]}`);
}
//-----------------------------------------------------------------------
//for of
//The for...of statements combo iterates (loops) over the values of any iterable.
//The code block inside the loop is executed once for each value.
//example:
const students = ['John', 'Sara', 'Jack'];
for ( let element of students ) {
    console.log(element);
}
//------------------------------------------------------------------------
//foreach
//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.
//example:
let students1 = ['John', 'Sara', 'Jack'];
students1.forEach(myFunction);
function myFunction(item) {

    console.log(item);
}
//-------------------------------------------------------------------------