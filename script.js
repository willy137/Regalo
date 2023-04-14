


function cora(){
    var corazon=document.createElement("div");
    corazon.className="corazon";
    var button=document.querySelector("#boton");
    var div=document.querySelector("#resul");
    var divB=document.querySelector("#btn");
    var tex=document.createElement("h2");
    tex.innerHTML="Felices 23 Meses mi cielo";
    var tex2=document.createElement("h3");
    tex2.innerHTML="Te amo mucho";
    divB.appendChild(tex);
    divB.appendChild(tex2);
    div.appendChild(corazon);
    button.remove();
}