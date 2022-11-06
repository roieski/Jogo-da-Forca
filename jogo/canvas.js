function desenharCanvas() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#000000";
    //Base da forca
    tela.beginPath();
    tela.moveTo(680,250);
    tela.lineTo(900,250);
    tela.moveTo(680,246);
    tela.lineTo(900,246);
   //estrutura forca
    tela.moveTo(750,250);
    tela.lineTo(750,30);
    tela.moveTo(750,30);
    tela.lineTo(870,30);
    tela.moveTo(750,75);
    tela.lineTo(810,30);
    tela.stroke();
    tela.closePath();
}
function desenharCorda() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#8E6B23";
    
    tela.beginPath();
    tela.moveTo(870,30);
    tela.lineTo(870,60);
    
    tela.stroke();
    tela.closePath();
}

function desenharCabeca() {
	 tela.fillStyle = "#A8A8A8"
    tela.beginPath();
   ;
	tela.arc(870,80,25,0,2*3.14);
	tela.fill();
}

function desenharTronco() {
    tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#A8A8A8";
    
    tela.beginPath();
    tela.moveTo(870,105);
    tela.lineTo(870,185);
    
    tela.stroke();
    tela.closePath();
}

function desenharPernaEsquerda() {
  tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#A8A8A8";
    
    tela.beginPath();
    tela.moveTo(870,190);
    tela.lineTo(895,225);
    
    tela.stroke();
    tela.closePath();
}

function desenharPernaDireita() {
  tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#A8A8A8";
    
    tela.beginPath();
    tela.moveTo(870,190);
    tela.lineTo(835,225);
    tela.stroke();
    tela.closePath();
    exibirDerrota();
}

function desenharBracoEsquerdo() {
    
  tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#A8A8A8";
    
    tela.beginPath();
    tela.moveTo(870,120);
    tela.lineTo(900,150);
    
    tela.stroke();
    tela.closePath();
}

function desenharBracoDireito() {
      tela.lineWidth = 8;
    tela.lineCap = "round";
    tela.lineJoin = "round";
    tela.strokeStyle = "#A8A8A8";
    
    tela.beginPath();
    tela.moveTo(870,120);
    tela.lineTo(840,150);
    
    tela.stroke();
    tela.closePath();
}
