/* // p=1

// var some = 5

// *
// **
// ***
// ****
// *****
console.log(`p=1`);
const n = 5;
var star = ''
for (let i = 0; i < n; i++) {
    console.log(star = star + '*');
    }
// p=2

// ******
// *****
// ****
// ***
// **
// *
console.log(`p=2`);
const num = 5;
var star = ''
for (let i = 0; i < num; i++) {
    for(let j =0; j<num-i;j++){
        star=star+"*";
    }
    star = star+'\n'
    }
    console.log(star);
// p=3

// A
// AB
// ABC
// ABCD
// ABCDE
console.log(`p=3`);
const num5 = 10;
let char = 64;
var arr=[]
for (let i = 1; i <= num5; i++) {
    char++;
    arr.push(char)
}for (const item of arr) {
    console.log(String.fromCharCode(item));
}

// p = 4

//     *
//    **
//   ***
//  ****
// *****

console.log(`p=4`);
let str="";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n-i; j++) {
        str= str+" ";
        
    }
    for (let k = 0; k < i; k++) {
        str=str+"*"
    }
    str = str + '\n';
    
}
console.log(str);

 */


 /* const matrix1=[
     [10,20,30],
     [40,50,60]
 ]
 const matrix2 =[
     [70,80],
     [90,100],
     [110,120]
 ]
 const row1=matrix1.length;
 const col1 = matrix1[0].length;

 const row2=matrix2.length;
 const col2 = matrix2[0].length;
 const matrix=[];
 const result =[];
 const result1=[];
 if (col1==row2) {
    const matColl = (matrix1[0][0] * matrix2[0][0]) +(matrix1[0][1] * matrix2[1][0]) +(matrix1[0][2] * matrix2[2][0]) ;
    result.push(matColl);
    const matColl1 = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1]*matrix2[1][1])+(matrix1[0][2]* matrix2[2][1]);
    // console.log(matrix1[1][2]*matrix2[1][2]);
    result.push(matColl1);
    const matRow1 = (matrix1[1][0]*matrix2[0][0])+(matrix1[1][1]*matrix2[1][0])+(matrix1[1][2]*matrix2[2][0]);
    result1.push(matRow1);
    const matRow2=(matrix1[1][0]*matrix2[0][1])+(matrix1[1][1]*matrix2[1][1])+(matrix1[1][2]*matrix2[2][1]);
    result1.push(matRow2);

}
matrix.push(result);
matrix.push(result1);
for (let i = 0; i < matrix.length; i++) {
    sum= '';
    for (let j = 0; j < matrix[i].length; j++) {
        sum = sum + matrix[i][j] + '\t';
    }
console.log(sum);
    
}
 */


const matrix1=[
    [10,20,30],
    [40,50,60]
]
const matrix2 =[
    [70,80],
    [90,100],
    [110,120]
]
// const row1=matrix1.length;
const col1 = matrix1[0].length;

const row2=matrix2.length;
// const col2 = matrix2[0].length;


//pothom tar col r sec tar row soman hote hobe

const matrix=[];
const result =[];
if (col1==row2) {
    for (let i = 0; i < matrix1.length; i++) {
        let result1=0;
        for (let j = 0; j < matrix1[i].length; j++) {
            //c11 = 10 x 70 + 20 x 90 + 30 x 110 = 5800
            // let num =matrix1[i][j];
            // let num2 = matrix2[j][i];
            // let num3 = num * num2;
            // result1= result1 + num3;
            
            console.log(c11);
        }
        // console.log(result1);
        // result.push(result1)
    }
    // console.log(result);
//    const matColl = (matrix1[0][0] * matrix2[0][0]) +(matrix1[0][1] * matrix2[1][0]) +(matrix1[0][2] * matrix2[2][0]) ;
//    result.push(matColl);
//    const matColl1 = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1]*matrix2[1][1])+(matrix1[0][2]* matrix2[2][1]);
//    // console.log(matrix1[1][2]*matrix2[1][2]);
//    result.push(matColl1);
//    const matRow1 = (matrix1[1][0]*matrix2[0][0])+(matrix1[1][1]*matrix2[1][0])+(matrix1[1][2]*matrix2[2][0]);
//    result1.push(matRow1);
//    const matRow2=(matrix1[1][0]*matrix2[0][1])+(matrix1[1][1]*matrix2[1][1])+(matrix1[1][2]*matrix2[2][1]);
//    result1.push(matRow2);

// }
// matrix.push(result);
// matrix.push(result1);
// for (let i = 0; i < matrix.length; i++) {
//    sum= '';
//    for (let j = 0; j < matrix[i].length; j++) {
//        sum = sum + matrix[i][j] + '\t';
//    }
// console.log(sum);
   
}
 