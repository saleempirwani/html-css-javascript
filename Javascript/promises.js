
function getDate(){
    data = [
        {
            title: 'Post one',
            desp: 'This is a post one'
        },
        
        {
            title: 'Post two',
            desp: 'This is a post two'
        }
    ]

    return [true, data]
}


const promise = new Promise((resolve, reject) => {
    
    const [isError, data] = getDate()

    return isError? reject('Error: Not working') : resolve(data)
})

promise
.then(data => data[0])
.then(data2 => console.log(data2))
.catch(err => console.log(err))

