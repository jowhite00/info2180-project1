/* Add your JavaScript to this file */
window.onload = function(){
    var btn = document.querySelector("button");
    var textMsg = docuement.getElementByClassName("message");

    btn.addEventListener("click", function(i){
        i.preventDefault();
        var email = document.getElementById("email").value;
        if (document.getElementById("email").value = ""){
            textMsg.innerHTML = "Thank you! Your email address" + email + "has been added to our mailing list!";
        } else {
            textMsg.innerHTML = "Please enter a valid email address";
        }


    });




}
