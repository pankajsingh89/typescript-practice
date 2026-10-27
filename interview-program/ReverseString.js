"use strict";
// Write a Typescript program with using reverse() function
let str = "Pankaj";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log(reversed);
