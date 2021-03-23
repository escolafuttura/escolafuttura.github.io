function isTextEqual(text1, text2) {
    if (text1 === text2) {
        return true;
    }

    return false;
}

function wrongInput(id) {
    document.getElementById(id).classList.add("error");
}

function rightInput(id) {
    document.getElementById(id).classList.remove("error");
}

function isNameValid(name) {
    let specials = /[^A-Za-z 0-9]/g;
    let result = specials.test(name);

    return !result;
}
