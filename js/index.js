import config from "./config";

function getLogin() {
    playerName = document.getElementById('putLogin').value
    playerPass = document.getElementById('putPass').value
    if (playerName == adminLogin && playerPass == adminPass) {
        $('msg').append("<div class='ui violet message'>Autorizado Chefe!</div>");
        setTimeout(function () {
            $('msg').append("<div class='ui active inverted dimmer'><div class='ui text loader'>Carregando</div></div><p></p>");
        }, 1000)
        setTimeout(function () {
            $(location).attr('href', './adminpainel.html');

        }, 5000)
        alert('Funcionou!')
    } else (alert('Deu Errado!'))
}


