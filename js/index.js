var adminLogin = 'admin';
var adminPass = '123';

function getLogin(){
   let playerName = document.getElementById('putLogin').value
   let playerPass = document.getElementById('putPass').value
   if (playerName == adminLogin && playerPass == adminPass) {
        $('msg').append("<div class='ui violet message'>Autorizado Chefe!</div>");
        setTimeout(function () {
            $('msg').append("<div class='ui active inverted dimmer'><div class='ui text loader'>Carregando</div></div><p></p>");
        }, 1000)
        setTimeout(function () {
            $(location).attr('href', './pages/adminpainel.html');

        }, 5000)
    } else (alert('Voce nao é o meu Chefe!'))
}


