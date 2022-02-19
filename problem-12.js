var matrix1 = [
    [2,4],
    [6,8],
    [10,12]
]

var matrix2 = [
    [1,3],
    [5,7],
    [9,11]
]

var resultMatrix = [];

const row1 = matrix1.length;
const col1= matrix1[0].length;

const row2 = matrix2.length;
const col2 = matrix2[0].length;
if (row1 ==row2 && col1 == col2) {
    for (let i =0; i<matrix1.length;i++) {
             var emptyArray =[];
        for (let j =0; j<matrix1[i].length;j++) {
            var number1 = matrix1[i][j];
            var number2 = matrix2[i][j]
            var result = number1+number2;
            emptyArray.push(result)
        }
        resultMatrix.push(emptyArray)
    } 
    
    for (const resultMat of resultMatrix) {
        var s= '';
        for (const result of resultMat) {
            s = s+result +'\t'
        }
        console.log(s);
    }
}
else{
    console.log("Can not perform Addition. Invalid Dimension!");
}
