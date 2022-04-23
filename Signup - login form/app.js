var fname = ''
var lname = ''
var email = ''
var passwd = ''
var cfmPasswd = ''
var phone = ''

var btn = document.getElementById('submitBtn')
btn.onclick = getData

function getData() {
    fname = document.getElementById('fname').value
    lname = document.getElementById('lname').value
    email = document.getElementById('email').value
    passwd = document.getElementById('passwd').value
    cfmPasswd = document.getElementById('cfmPasswd').value
    phone = document.getElementById('phone').value
    // document.write(fname, lname, email, passwd, cfmPasswd, phone)
    alert(fname + name + email+passwd+cfmPasswd+phone)
}

