// "Question 1 : We are interested in retrieving only the name of the students and 
// all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']

let StudentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

        let names = []
  for (let i=0; i < StudentRecords.length; i++){
           names.push(StudentRecords[i].name.toUpperCase())
  }
  console.log(names);


//  "Question 2: Suppose we have the same dataset as above but this time we want to get the details of
//  students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let  studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];

  let students = [];

  for (let i = 0; i < studentRecords.length; i++) {

      if( studentRecords[i].marks>50){
        students.push(studentRecords[i]);
      }
    }
    console.log(students)

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

 let studentRecord = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
    let x = []
  for( let i =0 ;i< studentRecord.length ; i++){
      if (( studentRecord[i].marks > 50 ) && (studentRecord[i].id >120)){
        x.push(studentRecord[i])
      }
  }
  console.log(x)


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know 
// the sum total of the marks of the students.
let studentsR = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
    let sumofmarks = 0
  for( let i =0 ;i< studentsR.length ; i++){
       sumofmarks= sumofmarks + (studentsR[i].marks)
  }
  console.log ( sumofmarks)

// Ans => 241

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from 
// the same dataset used above.
let studentR = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];

  let highscorename =[]
  for (let i=0; i<studentR.length ; i++){
    if( studentR[i].marks> 50){
          highscorename.push(studentR[i].name)
    }
      
  }
  
  console.log(highscorename)

// Ans=> (2) ['John', 'Wick']


// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let SRecord = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
 let sumofmark=0;
 for(let i=0;i<SRecord.length ; i++){
    if(SRecord[i].id > 120){
        sumofmark= sumofmark + SRecord[i].marks
    }
 }
 console.log(sumofmark)

//  Ana=> 143


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after
//  a grace of 15 marks has been added to those students who scored less than 50.

let SR = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];


 let grace =0
 for(let i= 0; i<SR.length ; i++){
    if ( SR[i].marks < 50){
     grace =  grace + (SR[i].marks + 15)}
 }
console.log ( grace)

// An=> 98

//Question 8 Create 6 objects , each object will have name, class, roll no as properties.
//  Store these objects in an array of objects.


const student1 = {
    name: "Sanjeev",
    class: 12,
    rollNo: 23,
  };

  const student2 = {
    name: "Sans",
    class: 9,
    rollNo: 20,
  };
  const student3 = {
    name: "Arpit",
    class: 5,
    rollNo: 5,
  };
  const student4 = {
    name: "Rohit",
    class: 8,
    rollNo: 45,
  };
  const student5 = {
    name: "Suman",
    class: 12,
    rollNo: 26,
  };
  const student6 = {
    name: "John",
    class: 1,
    rollNo: 10,
  };

  let Student = [];

  const studentsRecords = (student) => {
    Student.push(student);
  };

  studentsRecords(student1);
  studentsRecords(student2);
  studentsRecords(student3);
  studentsRecords(student4);
  studentsRecords(student5);
  studentsRecords(student6);

  console.log(Student);

// Ans=> (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {name: 'Sanjeev', class: 12, rollNo: 23}
// 1
// : 
// {name: 'Sans', class: 9, rollNo: 20}
// 2
// : 
// {name: 'Arpit', class: 5, rollNo: 5}
// 3
// : 
// {name: 'Rohit', class: 8, rollNo: 45}
// 4
// : 
// {name: 'Suman', class: 12, rollNo: 26}
// 5
// : 
// {name: 'John', class: 1, rollNo: 10}