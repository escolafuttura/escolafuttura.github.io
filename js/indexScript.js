var error = true;

function eraseText(id, previousValue) {
    if (document.getElementById(id)
        .value == previousValue) { 
        document.getElementById(id).value = "";
    }
}

function putTagBack(id, tag) {
    var value = document.getElementById(id).value;
    if (value.length <= 0) {
        document.getElementById(id).value = tag;
    }

}

function checkEmail() {
    var email1 = document.getElementById("email").value;
    var email2 = document.getElementById("confirmarEmail").value;

    if (isTextEqual(email1, email2)) {
        error = false;
        rightInput('confirmarEmail');
    } else {
        error = true;
        wrongInput('confirmarEmail');
    }

    console.log(error);
}