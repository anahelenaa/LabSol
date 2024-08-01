const botaoAbrir = document.getElementById("menu-botao");
const botaoFechar = document.getElementById("menu-botao-fechar");

botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    document.getElementById("mySidebar").classList.add("menu-aberto");
    document.getElementById("mySidebar").classList.remove("menu-fechado");

    document.getElementById("corpo").classList.add("corpo-menu-aberto");
    document.getElementById("corpo").classList.remove("corpo-menu-fechado");
}

function fecharMenu() {
    document.getElementById("mySidebar").classList.remove("menu-aberto");
    document.getElementById("mySidebar").classList.add("menu-fechado");

    document.getElementById("corpo").classList.remove("corpo-menu-aberto");
    document.getElementById("corpo").classList.add("corpo-menu-fechado");
}