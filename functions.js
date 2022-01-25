
/* Prato principal */

    function selecionado_frango(){
    
        document.getElementById("frango").style.borderStyle="solid";
        document.getElementById("bife").style.borderStyle="hidden";
        document.getElementById("salmao").style.borderStyle="hidden";
      
    };
    function selecionado_bife(){
    
        document.getElementById("frango").style.borderStyle="hidden";
        document.getElementById("bife").style.borderStyle="solid";
        document.getElementById("salmao").style.borderStyle="hidden";
      
    };
    function selecionado_salmao(){
    
        document.getElementById("frango").style.borderStyle="hidden";
        document.getElementById("bife").style.borderStyle="hidden";
        document.getElementById("salmao").style.borderStyle="solid";
      
    };

/* Acompanhamento bebida*/

function selecionado_Coca(){
    
    document.getElementById("Coca").style.borderStyle="solid";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";
  
};
function selecionado_Refri(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="solid";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";
};
function selecionado_Sprite(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="solid";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="hidden";
  
};
function selecionado_FantaLaranja(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="solid";
    document.getElementById("FantaUva").style.borderStyle="hidden";
  
};

function selecionado_FantaUva(){

    document.getElementById("Coca").style.borderStyle="hidden";
    document.getElementById("Refri").style.borderStyle="hidden";
    document.getElementById("Sprite").style.borderStyle="hidden";
    document.getElementById("FantaLaranja").style.borderStyle="hidden";
    document.getElementById("FantaUva").style.borderStyle="solid";
  
};

/* Acompanhamento sobremesa*/

function selecionado_Pudim(){
    
    document.getElementById("Pudim").style.borderStyle="solid";
    document.getElementById("Gelatina").style.borderStyle="hidden";
    document.getElementById("Mousse").style.borderStyle="hidden";
  
};
function selecionado_Gelatina(){

    document.getElementById("Pudim").style.borderStyle="hidden";
    document.getElementById("Gelatina").style.borderStyle="solid";
    document.getElementById("Mousse").style.borderStyle="hidden";
  
};
function selecionado_Mousse(){

    document.getElementById("Pudim").style.borderStyle="hidden";
    document.getElementById("Gelatina").style.borderStyle="hidden";
    document.getElementById("Mousse").style.borderStyle="solid";
  
};