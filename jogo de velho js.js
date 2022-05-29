
var jogador, vencedor =null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado= document.getElementById('vencedorSelecionado');

mudarjogador('x');

function escolherQuadrado(id){
    if (vencedor  !==null){
        return;
    }
}
var quadrado= document.getElementById(id);
if (quadrado.innerHTML  !== '-') {
    return;
}
quadrado.innerHTML = jogador;
quadrado.style.color= '#000';

if (jogador==="x") {
jogador = 'o'
} else {
    jogador = 'x';
} 
mudarjogador(jogador);
checavencedor();

function mudarJogador(VALOR){
  jogador = VALOR; 
  jogadorSelecionado.innerHTML= jogador;
}
 Function checavencedor(){
    var quadrado1 = document.getElementById(1);  
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (ChecaSequencia(quadrado1,quadrado2, quadrado3)){
        mudarcorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
        
    }
    
    if (ChecaSequencia(quadrado4,quadrado5, quadrado6)){
        mudarcorquadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
        
    }

    if (ChecaSequencia(quadrado7,quadrado8, quadrado9)){
        mudarcorquadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
        
    }

    if (ChecaSequencia(quadrado1,quadrado4, quadrado7)){
        mudarcorquadrado(quadrado1, quadrado4, quadrado7);
        mudarvencedor(quadrado1);
        return;
        
    }
    if (ChecaSequencia(quadrado1,quadrado2, quadrado3)){
        mudarcorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
        
    }
    if (ChecaSequencia(quadrado1,quadrado2, quadrado3)){
        mudarcorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
        
    } 
    }  
    function mudarVencedor(quadrado) {
        vencedor = quadrado.innerHTML;
        vencedorSelecionado.innerHTML = vencedor;
    }
    
    function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
        quadrado1.style.background = '#0f0';
        quadrado2.style.background = '#0f0';
        quadrado3.style.background = '#0f0';
    }
    
    function checaSequencia(quadrado1, quadrado2, quadrado3) {
        var eigual = false;
    
        if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
            eigual = true;
        }
    
        return eigual;
    }
    
    function reiniciar()
    {
        vencedor = null;
        vencedorSelecionado.innerHTML = '';
    
        for (var i = 1; i <= 9; i++) {
            var quadrado = document.getElementById(i);
            quadrado.style.background = '#eee';
            quadrado.style.color = '#eee';
            quadrado.innerHTML = '-';
        }
    
        mudarJogador('X');
    }   

            
          
