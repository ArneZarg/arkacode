import $ from 'jquery';
$(document).ready(function(){
    navChange();
    $("#menuBtn").on("click",toggleMenu)
})
const navChange = () =>{
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 250){
            $("#myNav").addClass("white");
            $("li a").addClass("black");
        }
        else{
            $("#myNav").removeClass("white");
            $("li a").removeClass("black");
        }
    })
}
const toggleMenu = () =>{
    $("#menu").toggleClass("show")
}

export {
    navChange,
    toggleMenu
}