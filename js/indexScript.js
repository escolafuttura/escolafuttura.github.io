var emailError = true;
var nameError = true;

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
        emailError = false;
        rightInput('confirmarEmail');
    } else {
        emailError = true;
        wrongInput('confirmarEmail');
    }
}

function checkName() {
    let name = document.getElementById("name").value;

    if (isNameValid(name)) {
        nameError = false;
        rightInput('name');
    } else {
        nameError = true;
        wrongInput('name');
    }

    putTagBack('name', 'Nome Completo');
}
