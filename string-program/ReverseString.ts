// WAP to reverse a string without using inbuild function

let str:string="Pankaj"
let rev:string=""

for(let i=str.length-1;i>=0;i--){

    rev=rev+str.charAt(i);

}
console.log("String after Reverse :",rev);
