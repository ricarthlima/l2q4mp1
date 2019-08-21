var posicaoX = 2;
var posicaoY = 1;
var temChave = false;
var typingDirection = false;

var elemSaida = document.getElementById("saida");
const elemEntrada = document.getElementById("input");
const elemButton = document.getElementById("button");
const elemPerg = document.getElementById("perg");

function sendCommand(){
    var comando = elemEntrada.value;
    elemEntrada.value = "";

    if (typingDirection == true) {
        // Escolhe a direção
        var direcao = comando;

        // Efetua o movimento     
        if (direcao == "baixo"){
            if (posicaoY == 1){
                elemSaida.innerHTML +="<br>Deu de cara na parede.<br>"
            } else {
                posicaoY -= 1  
            }          
        }else if (direcao == "cima"){
            if (posicaoY == 10){
                elemSaida.innerHTML +="<br>Deu de cara na parede.<br>"
            } else {
                posicaoY += 1
            }
        }else if (direcao == "esquerda"){
            if (posicaoX == 1){
                elemSaida.innerHTML +="<br>Deu de cara na parede.<br>"
            } else {
                posicaoX -= 1
            }
        }else if (direcao == "direita"){
            if (posicaoX == 10){
                elemSaida.innerHTML += "<br>Deu de cara na parede.<br>"
            } else {
                posicaoX += 1
            }
        } else {
            elemSaida.innerHTML += "<br>Não entendi."
        }

        // Trata caso onde esbarrou em algo
        if (posicaoX == 2 && posicaoY == 5){
            elemSaida.innerHTML += "<br>***Você sentiu que pisou em algo***<br>"

        } else if (posicaoX == 10 && posicaoY == 7){
            elemSaida.innerHTML += "<br>***Você achou um porta***<br>"
        } else {
            elemSaida.innerHTML += "<br>Andou..."
        }

        typingDirection = false;
        elemPerg.innerHTML = "O que você faz?"  

    }else{
        if (comando == "andar"){            
            elemPerg.innerHTML = "Para qual direção? [cima/baixo/esquerda/direita]<br>"
            typingDirection = true;              
    
        // COMANDO{ Pegar
        } else if (comando == "pegar"){
            if (posicaoX == 2 && posicaoY == 5){
                elemSaida.innerHTML += "<br>***Você achou uma chave!***"
                temChave = true
            } else {
                elemSaida.innerHTML += "<br>Nada aqui."
            }
        // COMANDO{ ABRIR
        } else if  (comando == "abrir"){
            // Testa se o que ele esta tentando abrir é a porta
            if (posicaoX == 10 && posicaoY == 7){
                if (temChave){
                    elemSaida.innerHTML += "<br>***Você fugiu, parabéns!***"
                    alert("Você venceu!")
                } else {
                    elemSaida.innerHTML += "<br>Está trancada."
                }
            } else {
                elemSaida.innerHTML += "<br>Não há nada para abrir aqui"
            }        
        // COMANDO{ Olhar
        } else if (comando == "olhar"){
            elemSaida.innerHTML += "<br>Você vê algo no chão a sua frente e uma porta na sua direita"
        } else {
            elemSaida.innerHTML += "<br>Não entendi."

        }
    }

    
}


elemEntrada.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
if (event.keyCode === 13) {
// Cancel the default action, if needed
event.preventDefault();
sendCommand();
}
}); 