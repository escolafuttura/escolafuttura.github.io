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
