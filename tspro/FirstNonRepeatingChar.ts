// WAP to find first non repeating character from given string

let str1: string = "aabbcddee"
for (let i = 0; i <= str1.length - 1; i++) {
    let count = 0
    for (let j = 0; j <= str1.length - 1; j++) {
        if (str1.charAt(i) === str1.charAt(j)) {
            count++
        }
    }
    if (count === 1) {
        console.log("First non repeating character :", str1.charAt(i))
    }
}