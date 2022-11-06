//pagina principal//
function iniciarJogo() {
    window. location = './forca.html';
}


//pagina jogo//

let tela = document.getElementById("forca").getContext("2d");
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 7;
let bntReiniciar = document.querySelector("#btnReiniciar , #reiniciar")
bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
})

let Reiniciar = document.querySelector("#reiniciar")
Reiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
})

 const palavras  = [
    palavra001 = {
        nome:"IRLANDA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome:"BRASIL",
        categoria:"LUGARES"
    },
    palavra003 = {
        nome:"CHILE",
        categoria:"LUGARES"
    },
    palavra004 = {
        nome:"INDONESIA",
        categoria:"LUGARES"
    },
    palavra005 = {
        nome:"MEXICO",
        categoria:"LUGARES"
    },
    palavra006 = {
        nome:"INGLATERRA",
        categoria:"LUGARES"
    },
    palavra007 = {
        nome:"PARIS",
        categoria:"LUGARES"
    },
    palavra008 = {
        nome:"CUBA",
        categoria:"LUGARES"
    },
    palavra009 = {
        nome:"INDONÉSIA",
        categoria:"LUGARES"
    },
    palavra010 = {
        nome:"AFRICA",
        categoria:"LUGARES"
    },
    palavra011 = {
        nome:"BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra012 = {
        nome:"LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra013 = {
        nome:"NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra014 = {
        nome:"TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome:"MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra016 = {
        nome:"BARCO",
        categoria:"TRANSPORTE"
    },
    palavra017 = {
        nome:"AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra018 = {
        nome:"TREM",
        categoria:"TRANSPORTE"
    },
    palavra019 = {
        nome:"CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra020 = {
        nome:"CARRO",
        categoria:"TRANSPORTE"
    },
    palavra021 = {
        nome:"XICARA",
        categoria:"OBJETOS"
    },
    palavra022 = {
        nome:"MOEDA",
        categoria:"OBJETOS"
    },
    palavra023 = {
        nome:"ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra024 = {
        nome:"SINO",
        categoria:"OBJETOS"
    },
    palavra025 = {
        nome:"CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra026 = {
        nome:"ESCOVA",
        categoria:"OBJETOS"
    },
    palavra027 = {
        nome:"LAMPADA",
        categoria:"OBJETOS"
    },
    palavra028 = {
        nome:"LAMPADA",
        categoria:"OBJETOS"
    },
    palavra029 = {
        nome:"CORTINA",
        categoria:"OBJETOS"
    },
    palavra030 = {
        nome:"LAPIS",
        categoria:"OBJETOS"
    },
    palavra031 = {
        nome:"MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra032 = {
        nome:"AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra033 = {
        nome:"COVE",
        categoria:"ALIMENTOS"
    },
    palavra034 = {
        nome:"MACARRRAO",
        categoria:"ALIMENTOS"
    },
    palavra035 = {
        nome:"JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra036 = {
        nome:"SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra037 = {
        nome:"PIZZA",
        categoria:"ALIMENTO"
    },
    palavra038 = {
        nome:"MAIONESA",
        categoria:"ALIMENTOS"
    },
    palavra039 = {
        nome:"SALGADINHO",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome:"BOMBOM",
        categoria:"ALIMENTOS"
    },
    palavra040 = {
        nome:"DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra041 = {
        nome:"GALINHA",
        categoria:"ANIMAIS"
    },
    palavra042 = {
        nome:"PAVAO",
        categoria:"ANIMAIS"
    },
    palavra043 = {
        nome:"CAMELO",
        categoria:"ANIMAIS"
    },
    palavra044 = {
        nome:"PERU",
        categoria:"ANIMAIS"
    },
    palavra045 = {
        nome:"ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra046 = {
        nome:"ELEFANTE",
        categoria:"ANIMAIS"
    },
    palavra047 = {
        nome:"CALANGO",
        categoria:"ANIMAIS"
    },
    palavra048 = {
        nome:"COBRA",
        categoria:"ANIMAIS"
    },
    palavra049 = {
        nome:"LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra050 = {
        nome:"HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
];

function começar() {
    document.getElementById('div-esconder').style.display = "none";
    palavraSecreta() 
    desenharCanvas()
    montarPalavraNaTela()


}

function palavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    console.log(palavraSecretaSorteada )
    console.log(palavraSecretaCategoria )
}

function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavratela = document.getElementById("palavra-secreta");
    palavratela.innerHTML = "";

    for(i = 0; i<palavraSecretaSorteada.length;i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'> "+ listaDinamica[i]+ "</div>"
        }
        else{
            palavratela.innerHTML = palavratela.innerHTML + "<div class='letras'> "+ listaDinamica[i]+ "</div>"
        }
    }

}

function verificaLetraEscolhida (letra){
    document.getElementById("tecla-" + letra).disabled = true;
   if(tentativas > 0){
     mudarStyleLetra("tecla-" + letra, false);
     comparalistas(letra);
     montarPalavraNaTela();

   }
   
}

function mudarStyleLetra(tecla, condicao){

    if(condicao== false){
     document.getElementById(tecla).style.background = "#800000";
     document.getElementById(tecla).style.color = "#ffffff";  
    }
    
    else{
        document.getElementById(tecla).style.background = "#228b22";
        document.getElementById(tecla).style.color = "#ffffff";  
    }
 
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0){
        tentativas--
        aparecerErrosForca();

        if(tentativas == 0) {
          abreModal("GAME OVER!!! <br> 🤬🤬🤬", "Não foi dessa vez ...<br> A palavra secreta era: <br>" + palavraSecretaSorteada);  
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
         for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS !!!", "Você venceu  ... <br> 🤪🤪🤪" );  
        tentativas = 0;
    }
}

function aparecerErrosForca(){
    switch(tentativas){
        case 6:
            desenharCorda()
            break;
        case 5:
            desenharCabeca()
            break;
        case 4:
            desenharTronco()
            break;
        case 3:
            desenharPernaEsquerda()
            break;
        case 2:
            desenharPernaDireita()
            break;
        case 1:
            desenharBracoEsquerdo()
            break;
        case 0:
            desenharBracoDireito()
            break;
            default: 
            desenharCanvas();
        
    }
      
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLongTitle")
    modalTitulo.innerHTML = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    })
}


