$(document).ready(function(){
    $("#header").load("_navbar.html");
});

$(document).ready(function(){
    $("#footer").load("_footer.html");
});

$(document).ready(function() {
    $(".nav-primary").click(function(event) {
        var url = event.target.id + ".html";
        $("#content").load(url);
        location.hash = event.target.id;
    });
});

window.onhashchange = function(){
    var what_to_do = location.hash.substring(1) + ".html";  
    $("#content").load(what_to_do);
}