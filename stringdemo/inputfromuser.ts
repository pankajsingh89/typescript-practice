
let input: string = "AABBCCDD";
let map = new Map<string, number>();

for (let ch of input) {
    map.set(ch, (map.get(ch) || 0) + 1);
}

for (let [ch, count] of map) {
    console.log(ch + " : " + count);
}
