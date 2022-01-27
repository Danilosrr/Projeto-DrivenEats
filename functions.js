
/* Prato principal */
let prato
let bebida
let sobremesa
let endereco
let nome


    function selecionado_frango(){
    
        document.getElementById("frango").style.borderStyle="solid";
        document.getElementById("bife").style.borderStyle="hidden";
        document.getElementById("salmao").style.borderStyle="hidden";
      
        prato = 'frango';

        
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
    };
    function selecionado_bife(){
    
        document.getElementById("frango").style.borderStyle="hidden";
        document.getElementById("bife").style.borderStyle="solid";
        document.getElementById("salmao").style.borderStyle="hidden";
      
         prato = 'bife';

         
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
    };
    function selecionado_salmao(){
    
        document.getElementById("frango").style.borderStyle="hidden";
        document.getElementById("bife").style.borderStyle="hidden";
        document.getElementById("salmao").style.borderStyle="solid";
      
         prato = 'salmao';

         
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
    };

/* Acompanhamento bebida*/

function selecionado_Coca(){
    
    document.getElementById("Coca").style.borderStyle="solid";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";

     bebida = 'coca';
     check2 = 'ok'; 

     
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
       
    }
};
function selecionado_Refri(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="solid";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";

     bebida = 'guarana';
     check2 = 'ok'; 

     
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
       
    }
};
function selecionado_Sprite(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="solid";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";

     bebida = 'sprite';
     check2 = 'ok'; 


     if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
};
function selecionado_FantaLaranja(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="solid";
    document.getElementById("FantaUva").style.borderStyle="hidden";
  
     bebida = 'fanta laranja';
     check2 = 'ok'; 

    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
};

function selecionado_FantaUva(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="solid";
  
     bebida = 'fanta uva';
     check2 = 'ok'; 
     

    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';
       
    }
};

/* Acompanhamento sobremesa*/

function selecionado_Pudim(){
    
    document.getElementById("Pudim").style.borderStyle="solid";
    document.getElementById("Gelatina").style.borderStyle="hidden";
    document.getElementById("Mousse").style.borderStyle="hidden";

     sobremesa = 'pudim';
     check3 = 'ok'; 
  
     
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';

    }
};
function selecionado_Gelatina(){

    document.getElementById("Pudim").style.borderStyle="hidden";
    document.getElementById("Gelatina").style.borderStyle="solid";
    document.getElementById("Mousse").style.borderStyle="hidden";

     sobremesa = 'gelatina';
     check3 = 'ok'; 

     
    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background="#32B72F";
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';

    }
};
function selecionado_Mousse(){

    document.getElementById("Pudim").style.borderStyle="hidden";
    document.getElementById("Gelatina").style.borderStyle="hidden";
    document.getElementById("Mousse").style.borderStyle="solid";

     sobremesa = 'mousse';
     check3 = 'ok'; 


    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background= '#32B72F';
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';

    }
};

function Endereco(){

    endereco = document.getElementById('InputEndereco').value;

    if(endereco != undefined && nome != undefined){
        document.getElementById('btn2text').textContent = 'Confirmar';
        document.getElementById('BotaoDados').style.background= '#32B72F';
        document.getElementById('BotaoDados').disabled = false;
    }
}

function Nome(){

    nome = document.getElementById('InputNome').value;

    if(endereco != undefined && nome != undefined){
        document.getElementById('btn2text').textContent = 'Confirmar';
        document.getElementById('BotaoDados').style.background= '#32B72F';
        document.getElementById('BotaoDados').disabled = false;
    }
}


function pedirDados() {
    var x = document.getElementById("Dados");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }