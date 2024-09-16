function project1(){
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("popUpBackground").style.display = "block";
    document.body.style.overflowY = "hidden"; 
}

function popUpClose(){
    document.getElementById("popUpBox").style.display = "none";
    document.getElementById("popUpBackground").style.display = "none";
    document.body.style.overflowY = "scroll"; 
}