var stdData = [
    {
        id: 0,
        gpa: 3.5,
        sem: 1
    },
    {
        id: 1,
        gpa: 3.2,
        sem: 1
    },
    {
        id: 2,
        gpa: 3.3,
        sem: 1
    },
    {
        id: 3,
        gpa: 3.6,
        sem: 1
    },
    {
        id: 4,
        gpa: 3.1,
        sem: 1
    }
]
// console.log(stdData)

var courseEglible = stdData.filter(std => std.sem != 1)  // Return same data for where cond true...

var mapFunc = stdData.map(std => std.gpa) // particular items array bhjegaa.

var mapFunc = stdData.map(std => std.gpa).reduce((acc, item) => acc += item).toFixed(2)

var mapFunc = stdData.map(std => {
    document.write(`ID: ${std.id} <br> GPA: ${std.gpa} <br> SEM: ${std.sem} <br><br>`)
})

console.log(mapFunc)