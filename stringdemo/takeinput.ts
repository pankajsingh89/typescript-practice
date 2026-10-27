
let str: string = "AABBCCDD";

for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (str.charAt(i) === str.charAt(j)) {
            count++;
        }
    }

    console.log(str.charAt(i) + " : " + count);
}
