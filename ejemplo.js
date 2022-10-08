// const array=[1,10,3,10];
// j=0;
// let num=0
// for (let i = 0; i < array.length; i++) {
//     let cont=0
//     for (let j = 0; j < array.length; j++) {
//         if (array[i]==array[j]) {
//             cont+=1;
//         }
//     }
//     if (cont = 2){ 
//         num=array[i];
//     } 
// }
// console.log(num);   

const array=[1,9,6,9,3];
let valorRepetido=array[0];
let num=0
let cont=0;
for (let i = 0; i < array.length; i++) {
        if (valorRepetido==array[i]) {
            cont+=1;
        }
        if (cont = 2){ 
            num=array[i];
        } 
    }
console.log(num);   


