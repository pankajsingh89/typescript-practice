let s1: string = "army";
let s2: string = "mary";

if (s1.length !== s2.length) {
    console.log("Both not Anagram string");
} else {
    let c1: string[] = s1.split("");
    let c2: string[] = s2.split("");

    c1.sort();
    c2.sort();

    if (c1.join("") === c2.join("")) {
        console.log("String are Anagram");
    } else {
        console.log("String are Not Anagram");
    }
}