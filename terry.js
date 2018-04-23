// DONT TOUCH THIS STUFF!
// THIS IS TERRY'S CODE. ONLY TERRY CAN EDIT *ANGRY FACE!
// NO! DONT EVEN THINK ABOUT IT!

// DESIGN ***********************
var body = document.getElementById('body');
body.style.backgroundColor = design.backgroundColor;

var box = document.getElementsByClassName("boxInner");
for (var i = 0; i < box.length; i++) {
    box[i].style.borderColor = design.borderColor;
    box[i].style.borderRadius = design.borderRadius;
    box[i].style.borderStyle = design.borderStyle;
    box[i].style.borderWidth = design.borderWidth;
}

// PHOTO ************************
var photo = document.getElementById('photo');
photo.style.backgroundImage = `url(${profile.photo})`;
photo.style.borderColor = profile.designPhoto.borderColor;
photo.style.borderStyle = profile.designPhoto.borderStyle;
photo.style.borderRadius = profile.designPhoto.borderRadius;

var photoBox = document.getElementById('photoBox');
photoBox.style.backgroundColor = profile.designPhoto.backgroundColor;

//  QUIZ BOX DESIGN SAME AS PROFILE
var quizBox = document.getElementById('quiz');
quizBox.style.backgroundColor = profile.designPhoto.backgroundColor;

var quizTitle = document.getElementById('quizTitle');
quizTitle.style.color = profile.designPhoto.color;

var lastScoreA = document.getElementById('lastScore');
lastScoreA.style.color = profile.designPhoto.color;



// NAME
var profileName = document.getElementById('name');
profileName.innerHTML = `${profile.firstName} ${profile.lastName}`;
profileName.style.color = profile.designPhoto.color;

// PROFILE INFO 
var superList = [];
for (var i = 0; i < profile.superPowers.length; i++) {
    superList.push("<li>" + profile.superPowers[i] + "</li>");
}

var hobbyList = [];
for (var i = 0; i < profile.hobbies.length; i++) {
    hobbyList.push("<li>" + profile.hobbies[i] + "</li>");
}


var profileInfo = document.getElementById('profile');
profileInfo.style.backgroundColor = profile.designInfo.backgroundColor;

profileInfo.innerHTML += "<h2 class='titleName'>Information</h2>";
profileInfo.innerHTML += "<ul class='infoList'><li><span>Age:</span> " + profile.age + "</li><li><span>A.K.A:</span> " + profile.aka + "</li><li><span>Enemy:</span> " + profile.enemy + "</li></ul>";
profileInfo.innerHTML += "<h3 class='titleName'>SuperPowers</h3>";
profileInfo.innerHTML += "<ul class='infoList'>" + superList.join(" ") + "</ul>";
profileInfo.innerHTML += "<h3 class='titleName'>Hobbies</h3>";
profileInfo.innerHTML += "<ul class='infoList'>" + hobbyList.join(" ") + "</ul>";



var titleName = document.getElementsByClassName('titleName');
for (var i = 0; i < titleName.length; i++) {
    titleName[i].style.color = profile.designInfo.titleColor;
}

var infoList = document.getElementsByClassName('infoList');
for (var i = 0; i < infoList.length; i++) {
    infoList[i].style.color = profile.designInfo.color;
}

// PET 
var petBox = document.getElementById('pet');
petBox.style.backgroundColor = pet.design.backgroundColor;

var petPhoto = document.getElementById('petPhoto');
petPhoto.style.backgroundImage = `url(${pet.photo})`;
petPhoto.style.borderColor = pet.design.borderColor;
petPhoto.style.borderRadius = pet.design.borderRadius;
petPhoto.style.borderStyle = pet.design.borderStyle;

var petInfo = document.getElementById('petInfo');
petInfo.innerHTML = `
	<h2 id="petTitle">${pet.firstName} ${pet.lastName}</h2>
	<p>Fav Food: ${pet.favFood}</p>
	<p>Weight: ${pet.weight}</p>
`;

var petTitle = document.getElementById('petTitle');

petInfo.style.color = pet.design.color;
petTitle.style.color = pet.design.titleColor;

// Quiz

var a = [];

function takeQuiz() {
    var points = 0;
    for (var i = 0; i < quiz.length; i++) {
        a[i] = "";
        while (a[i] == "") {
            a[i] = prompt(quiz[i][0])
        }
        // Correct
        if (quiz[i][1].toLowerCase() == a[i].toLowerCase()) {
            points += 1;
            alert("Correct! Points: " + points)
        } else {
            alert("No, sorry! The correct answer was " + quiz[i][1] + "! Points: " + points);
        }

    }

    if (points < 5) {
        alert("...worst score ever! Only " + points + " points!")
    } else {
        alert("Not bad... you got " + points + " points!")
    }

    var lastScore = document.getElementById('lastScore');
    lastScore.innerHTML = `Last score: ${points} points `; 

}

// PHOTOS/GIFS
var fav = document.getElementById('fav');
fav.style.backgroundColor = photos.design.backgroundColor;

var gifTitle = document.getElementById('gifTitle');
gifTitle.style.color = photos.design.titleColor;

var gifs = document.getElementById('gifs');

for (var i = 0; i < photos.photos.length; i++) {
	
	gifs.innerHTML += `<div class='gifBox' style='background-image:url(${photos.photos[i]})'></div>`;

}

var gifBox = document.getElementsByClassName('gifBox');
for (var i = 0; i < gifBox.length; i++) {
	gifBox[i].style.borderStyle = photos.design.borderStyle;
	gifBox[i].style.borderColor = photos.design.borderColor;
	gifBox[i].style.borderRadius = photos.design.borderRadius;
}