//let base = process.argv[2];
console.log("multiplicador");

let num1 = process.argv[2];
let num2 = process.argv[3];

if(process.argv.length === 4 && (!isNaN(Number(process.argv[2]))) && (!isNaN(Number(process.argv[3])))){

    console.log(`${num1} X ${num2} = ${num1 * num2}`);
/*
    for(let i = 1; i<=10; i++){
        console.log(`${base}X${i} = ${i * base}`);
}
*/
}
else{
    console.log("Utilização:");
    console.log("node tabuada.js <numero1> <numero2>");
}