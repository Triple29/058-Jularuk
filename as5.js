var comment1;
var comment2;
var comment3;

window.onload = setvar;
function setvar(){
    comment1 = document.getElementById("comment1");
    comment2 = document.getElementById("comment2");
    comment3 = document.getElementById("comment3");

}
function postFunction(){
    var Posttext = document.getElementById("text1").value;
    if(comment1.innerText ==""){
        comment1.innerText = Posttext;
    }
    else if(comment2.innerText ==""){
        comment2.innerText = Posttext;
    }
    else if(comment3.innerText ==""){
        comment3.innerText = Posttext;
    }
    document.getElementById("text1").value ="";
}
function clearFunction(){
    comment1.innerText = null;
    
    comment2.innerText = null;
    comment3.innerText = null;
}

