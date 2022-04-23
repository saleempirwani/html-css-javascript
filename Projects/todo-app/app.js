var list = []

function showList() {

    if (list.length !== 0) {

        removeAllChild()
        addAllChild()
    }
}

function btnAdd() {
    var userInput = document.getElementById('userInput')

    if (userInput.value.trim() !== "") {
        list.push(userInput.value)
        showList()
        userInput.value = ""
    }
}


function btnDel() {
    removeAllChild()
    list = []
}

function delTodo(index) {
    var ul = document.getElementsByTagName('ul')[0]
    ul.removeChild(ul.childNodes[index])
    list.splice(index, 1)
    showList()

}

function removeAllChild() {
    var ul = document.getElementsByTagName('ul')[0]
    var child = ul.lastChild
    while (child) {
        ul.removeChild(child)
        child = ul.lastChild
    }
}

function addAllChild() {
    list.map((l, index) => {
        var nodeLabel = document.createElement('LABEL')
        var textLabel = document.createTextNode(l)
        nodeLabel.appendChild(textLabel)

        var nodeBtn = document.createElement('BUTTON')

        var attBtn = document.createAttribute('onclick')
        attBtn.value = `delTodo(${index})`
        nodeBtn.setAttributeNode(attBtn)

        var textBtn = document.createTextNode('x')
        nodeBtn.appendChild(textBtn)

        var nodeLi = document.createElement('LI')
        nodeLi.appendChild(nodeLabel)
        nodeLi.appendChild(nodeBtn)

        document.getElementsByTagName('ul')[0].appendChild(nodeLi)
    })
}