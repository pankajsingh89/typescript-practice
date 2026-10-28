// WAP to find duplicate character from string

let str1: string = "programming"

for (let i = 0; i <= str1.length - 1; i++) {
    for (let j = i + 1; j <= str1.length - 1; j++) {
        if (str1.charAt(i) === str1.charAt(j)) {
            console.log(str1.charAt(i))
            break
        }
    }
}
