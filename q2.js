var students =[
    {
        1:{
            names:'Sakib',
            subjects :{
                bangla:80,
                math:50,
                english:60,
                religiousStudy : 90,
                science : 40,
            }
        }
    }
]
//empty array
var fail =[];
var aPluse =[];
var a=[];
var b=[];
var other =[];
//Students Add
 function addStudent(id) {
     var empty = {};
    empty[id]=anotherStudent;
    students.push(empty);
 }
//checking total Markes
function markChecking(roll,sub) {
    var marks = students[roll][sub].subjects;
    var total = marks.bangla + marks.english + marks.math + marks.religiousStudy + marks.science;
    var avarest = total / 5
    return avarest;
  }
//  grade 
function gradeCal(studenName,avarest) {
    if (avarest >= 80) {
        aPluse.push(studenName);
    }else if(avarest >= 70 && avarest <= 79){
        a.push(studenName);
    }else if(avarest >= 60 && avarest <= 69){
        b.push(studenName);
    }else if(avarest >= 33 && avarest <= 59){
        other.push(studenName);
    }else if(avarest <33){
        fail.push(studenName);
    }
}
 //2
  var anotherStudent={
      names: 'Rahat',
      subjects:{
        bangla:70,
        math:60,
        english:40,
        religiousStudy : 80,
        science : 45,
      }
  }
  addStudent(2);

  //3
  var anotherStudent={
    names: 'Ripon',
    subjects:{
      bangla:90,
      math:80,
      english:70,
      religiousStudy : 90,
      science : 80,
    }
}
  addStudent(3);
  //4
  var anotherStudent={
    names: 'Nahid',
    subjects:{
      bangla:55,
      math:50,
      english:40,
      religiousStudy : 60,
      science : 35,
    }
}
  addStudent(4);
  //5
  var anotherStudent={
    names: 'Tansen',
    subjects:{
      bangla:85,
      math:70,
      english:65,
      religiousStudy : 60,
      science : 40,
    }
}
  addStudent(5);
  //6
  var anotherStudent={
    names: 'Saddam',
    subjects:{
      bangla:50,
      math:36,
      english:33,
      religiousStudy : 40,
      science : 35,
    }
}
  addStudent(6);
  //7
  var anotherStudent={
    names: 'Shuvo',
    subjects:{
      bangla:90,
      math:80,
      english:70,
      religiousStudy : 80,
      science : 70,
    }
}
  addStudent(7);
  //8
  var anotherStudent={
    names: 'Hossain',
    subjects:{
      bangla:60,
      math:40,
      english:30,
      religiousStudy : 35,
      science : 40,
    }
}
  addStudent(8);
  //9
  var anotherStudent={
    names: 'Sakil',
    subjects:{
      bangla:25,
      math:30,
      english:18,
      religiousStudy : 35,
      science : 20,
    }
}
  addStudent(9);
  //10
  var anotherStudent={
    names: 'Hasan',
    subjects:{
      bangla:30,
      math:33,
      english:20,
      religiousStudy : 32,
      science : 25,
    }
}
  addStudent(10);
 //mark checking
  var stName = students[0][1].names;
  var mark = markChecking(0,1);
  gradeCal(stName,mark);

  var stName = students[1][2].names;
  var mark = markChecking(1,2);
  gradeCal(stName,mark);

  var stName = students[2][3].names;
  var mark = markChecking(2,3);
  gradeCal(stName,mark);

  var stName = students[3][4].names;
  var mark = markChecking(3,4);
  gradeCal(stName,mark);

  var stName = students[4][5].names;
  var mark = markChecking(4,5);
  gradeCal(stName,mark);

  var stName = students[5][6].names;
  var mark = markChecking(5,6);
  gradeCal(stName,mark);

  var stName = students[6][7].names;
  var mark = markChecking(6,7);
  gradeCal(stName,mark);

  var stName = students[7][8].names;
  var mark = markChecking(7,8);
  gradeCal(stName,mark);

  var stName = students[8][9].names;
  var mark = markChecking(8,9);
  gradeCal(stName,mark);

  var stName = students[9][10].names;
  var mark = markChecking(9,10);
  gradeCal(stName,mark);
  
//   console.log(fail);
//   console.log(aPluse);
//   console.log(a);
//   console.log(b);
//   console.log(other);
console.log(`${fail[0]} is Deleted 
${fail[1]} is Deleted`);
console.log(`A+ = ${aPluse}`);
console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`Others students are  = ${other}`);
 


