let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); // atribuiçao de funcao a uma variavel
let tentativas =  1;

function exibirTextoNaTela(tag, texto){ // funcao com parametro
     let campo = document.querySelector(tag); //"entra" no documento html e selecionar o elemento especificado e atribui-lo a variavel
     campo.innerHTML = texto;  // acessa e modifica o conteudo do elemento
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
 
function verificarChute(){ //funcao sem parametro
     let chute = document.querySelector('input').value; // input eh um valor de entrada, por isso o .value
    
     if (chute ==  numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemTentativas = `PARABÉNS!! você descobriu com ${tentativas} ${palavraTentativa}!`;
          exibirTextoNaTela('p', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
     }else{
          if (chute > numeroSecreto){
               exibirTextoNaTela('p', 'O número secreto eh menor');
          } else {
               exibirTextoNaTela('p', 'O número secreto eh maior');
          }
          tentativas++;
          limparCampo();
     }
}

function gerarNumeroAleatorio() { // funcao com retorno
     let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1); 
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite){
          listaDeNumerosSorteados = [];
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
     }else{
          listaDeNumerosSorteados.push(numeroEscolhido)
          console.log(listaDeNumerosSorteados);
          return numeroEscolhido;
     }
}

function limparCampo(){
     chute = document.querySelector('input');
     chute.value = ''
}

function reiniciarJogo(){
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);

}
