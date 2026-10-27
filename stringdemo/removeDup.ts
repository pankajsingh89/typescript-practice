
let str: string = "12345";
let isDigit: boolean = true;

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) < "0" || str.charAt(i) > "9") {
        isDigit = false;
        break;
    }
}

console.log(isDigit ? "Only digits" : "Not only digits");
