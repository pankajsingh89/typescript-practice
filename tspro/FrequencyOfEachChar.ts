
let str: string = "AABBCCDDEE";
let uniqueChars = new Set(str);

for (let char of uniqueChars) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (char === str.charAt(i)) {
            count++;
        }
    }

    console.log(char + "=" + count);
}
