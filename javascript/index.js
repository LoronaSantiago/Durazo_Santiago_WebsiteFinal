$(document).ready(function(){
    $("#hamburger").click(function(){
        $("#mobile-menu").fadeIn("slow")
    });
    $("#close-menu").click(function(){
        $("#mobile-menu").fadeOut("slow")
    });
});