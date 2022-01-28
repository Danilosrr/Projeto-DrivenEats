
/* Prato principal */
let prato;
let bebida;
let sobremesa;
let endereco;
let nome;

let preco1;
let preco2;
let preco3;
let precototal;

    function selecionado_frango(){
    
        document.getElementById("frango").style.borderStyle="solid";
        document.getElementById("bife").style.borderStyle="hidden";
        document.getElementById("salmao").style.borderStyle="hidden";
      
        document.getElementById("frangocheck").style.display='flex';
        document.getElementById("bifecheck").style.display='none';
        document.getElementById("salmaocheck").style.display='none';

        prato = 'Frango Yin Yang';
        preco1 = 14.99;

        
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

        document.getElementById("frangocheck").style.display='none';
        document.getElementById("bifecheck").style.display='flex';
        document.getElementById("salmaocheck").style.display='none';
      
        prato = 'Bife com fritas';
        preco1 = 17.99;

         
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

        document.getElementById("frangocheck").style.display='none';
        document.getElementById("bifecheck").style.display='none';
        document.getElementById("salmaocheck").style.display='flex';
      
        prato = 'Salmao grelhado';
        preco1 = 19.99;

         
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

    document.getElementById("Cocacheck").style.display='flex';
    document.getElementById("Refricheck").style.display='none';
    document.getElementById("Spritecheck").style.display='none';
    document.getElementById("FantaLaranjacheck").style.display='none';
    document.getElementById("FantaUvacheck").style.display='none';

    bebida = 'Coca';
    preco2 = 4.99; 

     
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

    document.getElementById("Cocacheck").style.display='none';
    document.getElementById("Refricheck").style.display='flex';
    document.getElementById("Spritecheck").style.display='none';
    document.getElementById("FantaLaranjacheck").style.display='none';
    document.getElementById("FantaUvacheck").style.display='none';

    bebida = 'Guaraná';
    preco2 = 4.99; 

     
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

    document.getElementById("Cocacheck").style.display='none';
    document.getElementById("Refricheck").style.display='none';
    document.getElementById("Spritecheck").style.display='flex';
    document.getElementById("FantaLaranjacheck").style.display='none';
    document.getElementById("FantaUvacheck").style.display='none';

    bebida = 'Sprite';
    preco2 = 4.99; 


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

    document.getElementById("Cocacheck").style.display='none';
    document.getElementById("Refricheck").style.display='none';
    document.getElementById("Spritecheck").style.display='none';
    document.getElementById("FantaLaranjacheck").style.display='flex';
    document.getElementById("FantaUvacheck").style.display='none';
  
    bebida = 'Fanta laranja';
    preco2 = 4.99; 

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

    document.getElementById("Cocacheck").style.display='none';
    document.getElementById("Refricheck").style.display='none';
    document.getElementById("Spritecheck").style.display='none';
    document.getElementById("FantaLaranjacheck").style.display='none';
    document.getElementById("FantaUvacheck").style.display='flex';
  
    bebida = 'Fanta uva';
    preco2 = 4.99; 
     

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

    document.getElementById("Pudimcheck").style.display='flex';
    document.getElementById("Gelatinacheck").style.display='none';
    document.getElementById("Moussecheck").style.display='none';

    sobremesa = 'Pudim';
    preco3 = 6.99; 
  
     
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

    document.getElementById("Pudimcheck").style.display='none';
    document.getElementById("Gelatinacheck").style.display='flex';
    document.getElementById("Moussecheck").style.display='none';

    sobremesa = 'Gelatina';
    preco3 = 5.99; 

     
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

    document.getElementById("Pudimcheck").style.display='none';
    document.getElementById("Gelatinacheck").style.display='none';
    document.getElementById("Moussecheck").style.display='flex';

    sobremesa = 'Mousse';
    preco3 = 6.99; 


    if (prato != undefined && bebida != undefined && sobremesa !=undefined){
        
        document.getElementById('BotaoItens').style.background= '#32B72F';
        document.getElementById("BotaoItens").disabled = false;
        document.getElementById('btn1text').textContent = 'Fechar pedido';

    }
};

/* Botões */

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
   
    document.querySelector("#Dados").classList.toggle("escondido");
    
    document.querySelector("main").style.opacity = 0.5;

  }

function cancelarDados(){

    document.querySelector("#Dados").classList.toggle("escondido");
    
    document.querySelector("main").style.opacity = 1.0;

}

function ConfirmarPedido() {

    document.querySelector("#Dados").classList.toggle("escondido");
    document.querySelector("#ConfirmePedido").classList.toggle("escondido");

    document.getElementById("ref_prato").innerHTML=prato;
    document.getElementById("ref_bebida").innerHTML=bebida;
    document.getElementById("ref_sobremesa").innerHTML=sobremesa;
    document.getElementById("ref_preco1").innerHTML=preco1;
    document.getElementById("ref_preco2").innerHTML=preco2;
    document.getElementById("ref_preco3").innerHTML=preco3;

    document.getElementById("precototal").innerHTML='R$ ' + parseFloat(preco1+preco2+preco3);

  }

function CancelarZap() {

    
    
    document.querySelector("main").style.opacity = 1.0;

    document.querySelector("#ConfirmePedido").classList.toggle("escondido");
    
  }

function PedidoZap(){

    let mensagem;

    mensagem = 
    "Olá, gostaria de fazer o pedido:\n"+
    "- Prato: " +prato+"\n"+
    "- Bebida: " +bebida+"\n"+
    "- Sobremesa: " +sobremesa+"\n"+
    "Total: R$ " + parseFloat(preco1+preco2+preco3)+"\n"+
    "Neste endereço: " + endereco +"\n"+
    "Meu nome é: " + nome;


    window.open("https://wa.me/558398817547?text="+encodeURIComponent(mensagem));
  }