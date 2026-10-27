// Check whether a string is a palindrome.

let str4 = "madam"
let rev1 = ""

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i)
}
if (str === rev) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}
