//put this code in a new script file called financeScript from here
function roundNumber(number) {
    return (Math.round(number * 100) / 100).toFixed(2);
}

function getParentId() {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let parentId = day + ' ' + month + ' ' + year;
    return parentId;
}

function sendInscription() {
    var clientId = "oi/";//document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('telefone').value;
    var city = document.getElementById('cidade').value;
    var parentId = getParentId() + '/';

    firebase.database().ref('Clientes/' + parentId
        + clientId).set({
            nome: name,
            telefone: phone,
            cidade: city,
            email: clientId
        });

    /*firebase.database().ref('Clientes/').set({
            nome: "evrton",
            telefone: "123",
            cidade: "vit",
            email: "noo"
        });*/

    /*firebase.database().ref("Clients").once('value', (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
            console.log(childSnapshot);
        });
    });*/
    console.log(getParentId());
}
