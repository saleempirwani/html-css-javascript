function fb_login() {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log("User", user)
        const { displayName, email, phone, photoURL } = user
        console.log(displayName, email, phone, photoURL)
        
        // ...
    }).catch(function (error) {
        console(`Error >> ${error}`)
    });

}

function logout() {

    firebase.auth().signOut()
        .then(function () {
            console.log("Logout Successfully...")
        })
        .catch(function (error) {
            // An error happened
        });
}