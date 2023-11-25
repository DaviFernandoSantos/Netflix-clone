const nav = document.getElementById("navbar");
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 100){
        nav.classList.add("nav_black");
    } else{
    nav.classList.remove("nav_black");
    }
});

function direcao(e){
    var direcao = document.getElementById("contentSlide");

    if(e == 1){
        direcao.scrollLeft = direcao.scrollLeft - 200;
    } else if(e == 2){
        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
};

var novidades = document.querySelector(".novidades");

novidades.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#notificacoes");
    
    legenda.classList.remove("sino_notificacoes");
});

novidades.addEventListener("mouseout", function(){
    
    var legenda = document.querySelector("#notificacoes");
    
    legenda.classList.add("sino_notificacoes");
});



