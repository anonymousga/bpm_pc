var elem="";
function rshow1(idE){
    elem = document.getElementById("rsh1");
    elem.setAttribute("class", "d-block");
    idE.setAttribute("class", "d-none");
}
function rhide1(){
    elem = document.getElementById("rsh1");
    elem.setAttribute("class", "d-none");
    document.getElementById("rshow1").setAttribute("class", "d-inline");
}
function rshow2(idE){
    elem = document.getElementById("rsh2");
    elem.setAttribute("class", "d-block");
    idE.setAttribute("class", "d-none");
}
function rhide2(){
    elem = document.getElementById("rsh2");
    elem.setAttribute("class", "d-none");
    document.getElementById("rshow2").setAttribute("class", "d-inline");
}