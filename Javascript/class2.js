
/***** PROMPT *******************************************************/

// var question = 'Enter your age.'
// var defAns = 0

// var age = prompt(question, defAns)
// document.write(age)


/***** IF ELSE *******************************************************/

// var pert = *prompt('Enter your percentage', 0) // '*' use for type casting
// grade = ''

// if (pert >= 80 && pert <= 100){
//     grade = 'A+'
// }
// else if (pert >= 70 && pert <= 79){
//     grade = 'A'
// }
// else if (pert >= 60 && pert <= 69){
//     grade = 'B'
// }
// else if (pert >= 50 && pert <= 59){
//     grade = 'C'
// }
// else if (pert >= 40 && pert <= 49){
//     grade = 'D'
// }
// else if (pert >= 0 && pert <= 39){
//     grade = 'F'
// }
// else{
//     document.write('Please enter b/w 0% - 100%')
// }

// document.write('You got ', grade, ' grade.')


/***** CONDITIONAL OPERATOR *******************************************************/

// && (AND operation, allow when both condition TRUE)
// || (OR operation, allow when one condition TRUE)


/***** COMPARISON OPERATOR *******************************************************/

// == (Equal operator), 
// != (Not equal operator), 
// === (Equal with datatype and value), 
// !== (Not equal with datatype and value),
// > (Greater than),
// < (Less than),
// >= (Greater than and equal),
// <= (Less than and equal),



/***** ARRAYS *******************************************************/

/* 

* Array only contains same type of data (i.e: String, Interger etc.)
* Array is a data structure.
* Array is allocate contingous alocation of memory

*/

// var std1 = 'Ali'
// var std2 = 'Usman'
// var std3 = 'Hunan'
// var std4 = 'Saleem'

// document.write(std2)

// Arrays...

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// document.write(students[1])


// Adding and removing elements...

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// console.log(students)
// students.pop() // 'pop' method remove element from last of an array
// console.log(students)

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// console.log(students)
// students.push('Yaseen', 'Kashif') // 'push' method  add element in last of an array
// console.log(students)


// Removing, inserting, and extracting elements...

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// console.log(students)
// students.shift() // 'shift' method remove element from start of an array
// console.log(students)

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// console.log(students)
// students.unshift('Yaseen', 'Kashif') // 'unshift' method add element in start of an array.
// console.log(students)

// var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
// console.log(students)
// students.splice(2, 1) // 'splice' method, add or remove element anywhere in an array.
// console.log(students)

var students = ['Ali', 'Usman', 'Hunan', 'Saleem']
console.log(students)
new_std = students.slice(2, students.length) // 'slice' method, to copy one or more consecutive elements.
console.log(new_std)
