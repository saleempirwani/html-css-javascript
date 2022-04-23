
console.log('Before food')


function parallel() {
    setTimeout(function () {
        console.log('Preparing Food')
    })


}


function abc() {
    setTimeout(() => {
        for (var i = 0; i < 5000; i++) {
            console.log(i)
        }
    }), 2000
}

abc()
parallel()


console.log('Ready Food')

