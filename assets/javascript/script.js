// function myFunction() {
//     document.getElementById("myElement").style.color = "blue";
//     document.getElementById("myElement").style.paddingTop = "50px";
//     document.getElementById("myElement").style.width = "200px";
//     document.getElementById("myElement").style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
//     document.getElementById("myElement").style.fontSize = "100px";
//     document.getElementById("myElement").style.alignContent = "right";
// }
// function thisOneGallery() {
//     // document.getElementById("myElement").className = "galleryheader";
//  document.getElementById("myElement").classList.remove("galleryheader")
// }
$(document).ready(function (event) {
    $("#hide").click(function () {
        $(".h1title").fadeOut("slow");
    });

    $(".h1title").fadeIn(6000);
    
    $("#show").click(function () {
        $(".h1title").fadeIn(6000);
    });
    $("#myElement").click(function () {
        $(".photobroom").slideToggle("8000");
    });
});