//Define Arrays for each tab
imageArr = [["images/monkeypedia/page1.png", "images/monkeypedia/page2.png", "images/monkeypedia/page3.png"], [], ["images/conathon/page1.png", "images/conathon/page2.png", "images/conathon/page3.png", "images/conathon/page4.png", "images/conathon/page5.png"], []];
titleArr = ["Monkeypedia", "eCommerce", "Conathon's Casino", "Java Games"];
// Image Index for Gallery
let currentImageIndex = 0;

function tab(num) { //Changes content to selected tab
    //Define Arrays for each tab
    linkArr = [["https://github.com/darrenawf/Monkeypedia-BETA"], [""], ["https://github.com/darrenawf/ConathonsCasino"], ["https://github.com/darrenawf/Dino-Game", "https://github.com/darrenawf/Flap-Burd"]];
    //Set colour for closed tab
    document.getElementById("tabOne").style.backgroundColor = "rgb(200, 205, 215)";
    document.getElementById("tabTwo").style.backgroundColor = "rgb(200, 205, 215)";
    document.getElementById("tabThree").style.backgroundColor = "rgb(200, 205, 215)";
    document.getElementById("tabFour").style.backgroundColor = "rgb(200, 205, 215)";
    //Set colour for open tab
    switch (num) {
        case 1:
            document.getElementById("tabOne").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            break;
        case 2:
            document.getElementById("tabTwo").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            break;
        case 3:
            document.getElementById("tabThree").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            break;
        case 4:
            document.getElementById("tabFour").style.backgroundColor = "rgb(210, 215, 225)"; //Display open tab
            break;
    }
    //Title
    document.querySelector(".popUpTitle").textContent = titleArr[num - 1];
    //Link
    document.querySelector(".popUpTitleContainer a").href = linkArr[num - 1][0];
    //Images
    document.querySelector(".popUpImage").src = imageArr[num - 1][1];
    document.querySelector(".galleryImage.one").src = imageArr[num - 1][0];
    document.querySelector(".galleryImage.two").src = imageArr[num - 1][1];
    document.querySelector(".galleryImage.three").src = imageArr[num - 1][2];
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

// Scroll image gallery to the left
function galleryLeft() {
    let num;
    title = document.querySelector(".popUpTitle").textContent;

    // Determine the tab number based on the title
    switch (title) {
        case titleArr[0]:
            num = 1;
            break;
        case titleArr[1]:
            num = 2;
            break;
        case titleArr[2]:
            num = 3;
            break;
        case titleArr[3]:
            num = 4;
            break;
    }

    // Get the total number of images for the selected tab
    galleryLength = imageArr[num - 1].length;

    // Decrement the current image index, wrapping around if necessary
    // Set to left (+1)
    currentImageIndex = (currentImageIndex + 1 + galleryLength) % galleryLength;

    // Update the gallery images
    document.querySelector(".galleryImage.one").src = imageArr[num - 1][currentImageIndex % galleryLength];
    document.querySelector(".galleryImage.two").src = imageArr[num - 1][(currentImageIndex + 1) % galleryLength];
    document.querySelector(".galleryImage.three").src = imageArr[num - 1][(currentImageIndex + 2) % galleryLength];
}

// Scroll image gallery to the left
function galleryRight() {
    let num;
    title = document.querySelector(".popUpTitle").textContent;

    // Determine the tab number based on the title
    switch (title) {
        case titleArr[0]:
            num = 1;
            break;
        case titleArr[1]:
            num = 2;
            break;
        case titleArr[2]:
            num = 3;
            break;
        case titleArr[3]:
            num = 4;
            break;
    }

    // Get the total number of images for the selected tab
    galleryLength = imageArr[num - 1].length;

    // Decrement the current image index, wrapping around if necessary
    //Set to Right (-1)
    currentImageIndex = (currentImageIndex - 1 + galleryLength) % galleryLength;

    // Update the gallery images
    document.querySelector(".galleryImage.one").src = imageArr[num - 1][currentImageIndex % galleryLength];
    document.querySelector(".galleryImage.two").src = imageArr[num - 1][(currentImageIndex + 1) % galleryLength];
    document.querySelector(".galleryImage.three").src = imageArr[num - 1][(currentImageIndex + 2) % galleryLength];
}