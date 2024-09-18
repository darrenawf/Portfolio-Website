function tab(num) { //Changes content to selected tab
    switch (num) {
        case 1:
            document.getElementById("tabOne").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            document.getElementById("tabTwo").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabThree").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabFour").style.backgroundColor = "rgb(200, 205, 215)";
            break;
        case 2:
            document.getElementById("tabOne").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabTwo").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            document.getElementById("tabThree").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabFour").style.backgroundColor = "rgb(200, 205, 215)";
            break;
        case 3:
            document.getElementById("tabOne").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabTwo").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabThree").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            document.getElementById("tabFour").style.backgroundColor = "rgb(200, 205, 215)";
            break;
        case 4:
            document.getElementById("tabOne").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabTwo").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabThree").style.backgroundColor = "rgb(200, 205, 215)";
            document.getElementById("tabFour").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            break;
    }
}

function popUpOpen(num) { //Opens pop up window
    document.getElementById("popUpBox").style.display = "block";
    document.getElementById("popUpBackground").style.display = "block";
    document.body.style.overflowY = "hidden";
    tab(num); //Changes content to selected tab
}

function popUpClose() { //Closes pop up window
    document.getElementById("popUpBox").style.display = "none";
    document.getElementById("popUpBackground").style.display = "none";
    document.body.style.overflowY = "scroll";
}

function galleryLeft() {
    //SCROLL LEFT
}

function galleryRight() {
    //SCROLL RIGHT
}