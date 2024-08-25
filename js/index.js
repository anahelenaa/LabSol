const botaoAbrir = document.getElementById("menu-botao");
const botaoFechar = document.getElementById("menu-botao-fechar");
var cabecalho = document.getElementById("cabecalho");
var corpo = document.getElementById("corpo");

window.onscroll = function () {
    aoScrollar();
};


botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    document.getElementById("mySidebar").classList.add("menu-aberto");
    document.getElementById("mySidebar").classList.remove("menu-fechado");

    document.getElementById("corpo").classList.add("corpo-menu-aberto");
    document.getElementById("corpo").classList.remove("corpo-menu-fechado");
};

function fecharMenu() {
    document.getElementById("mySidebar").classList.remove("menu-aberto");
    document.getElementById("mySidebar").classList.add("menu-fechado");

    document.getElementById("corpo").classList.remove("corpo-menu-aberto");
    document.getElementById("corpo").classList.add("corpo-menu-fechado");
};

function aoScrollar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 15) {
      cabecalho.classList.add("sticky");
      corpo.classList.add("conteudo");
  
    } else {
      cabecalho.classList.remove("sticky");
      cabecalho.classList.remove("sticky_remove");
      corpo.classList.remove("conteudo");
    }
};

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
},5000)

function nextImage(){
  count++;

  if(count > 4){
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
};




