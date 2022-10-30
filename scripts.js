/* Add your JavaScript to this file */
window.onload = function() {

    let container = document.getElementsByClassName("newsletter")[0]
    let subscribe = container.getElementsByTagName("button")
    let validMessage = document.querySelector(".message")
    let email = document.getElementById("email")
    let reGex = /^\S+@\S+\.\S+$/i

    email.innerHTML = ""

    subscribe[0].addEventListener('click', function(e){
        e.preventDefault()
        console.log("nice try :D")
        let enteredEmail = email.value

        if (enteredEmail === "" || !reGex.test(enteredEmail)) {
            validMessage.innerHTML  = "Please enter a valid email address"
        }else{
            validMessage.innerHTML = `Thank You! Your email address ${enteredEmail} has been added to our mailing list!`
        }
    })



}

