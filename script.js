let btn = document.getElementById("btn");
btn.addEventListener('click',myFunction);
function myFunction(){
    console.log("Message");
    console.warn("Attention!");
    console.error("ERREUR");
}