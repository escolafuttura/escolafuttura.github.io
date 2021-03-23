//put this code in a new script file called financeScript from here
function roundNumber(number) {
    return (Math.round(number * 100) / 100).toFixed(2);
}

function getParentId() {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let parentId = day + 'a'+ month +'a'+ year;
    return parentId;
}

function createId(name) {
    let date = new Date;
    let start = name[0] + name[1] + name[2];
    let end = date.getHours() + 'a'
        + date.getMinutes() + 'a' + date.getSeconds()
        + 'a' + date.getMilliseconds();
    let id = start + end;
    return id;
}


function sendInscription() {
    var clientId = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('telefone').value;
    var city = document.getElementById('cidade').value;
    var parentId = getParentId() + '/';
    var childId = createId(name);

    if (emailError === false && nameError === false) {
        var reference = 'Clientes/' + parentId
            + childId;

        firebase.database().ref(reference).set({
            nome: name,
            telefone: phone,
            cidade: city,
            email: clientId
        });

        window.alert("Cadastro realizado com sucesso")
    } else {
        window.alert("Ocorreu algum erro, o campo em vermelho indica onde deve ser mudado")
    }
}
