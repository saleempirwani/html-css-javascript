

// function getDate() {
//     data = [
//         {
//             title: 'Post one',
//             desp: 'This is a post one'
//         },

//         {
//             title: 'Post two',
//             desp: 'This is a post two'
//         }
//     ]

//     return [false, data]
// }


// function fetchhh(abc) {
//     const promise = new Promise((resolve, reject) => {

//         const [isError, data] = getDate()

//         return isError ? reject('Error: Not working') : resolve(data)
//     })
//     // console.log(promise)
//     return promise
// }


// rep = fetchhh('')

// rep.then(data => data[0])
//     .then(data2 => console.log(data2))
//     .catch(err => console.log(err))


let data = ''

const pro = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(resp => resp.json())
.then(json => console.log(json))
.catch(err => console.log(err))

Promise.all(pro)