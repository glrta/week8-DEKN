import query from "../query.js";
const app = document.querySelector("#app");

// The secret code. 
let audio = document.createElement("audio");
audio.src = "../surprise/who-let-the-dogs-out-ringtone.mp3";


const html = /*html*/ `
<h1>Our Fury Friends!</h1>
<ul id="allDogs" class="all-dogs-container"></ul>
`;

function createDogElement(dog) {
    const dogListItem = document.createElement("li");
    const dogAnchor = document.createElement("a")
    dogAnchor.href = `/dog?id=${dog.id}`
    const dogNameElement = document.createElement("h2");
    dogNameElement.textContent = dog.name;
    const dogBreedElement = document.createElement("h3");
    dogBreedElement.textContent = dog.breed;
    const dogImageElement = document.createElement("img");
    dogImageElement.src = dog.image;
    dogImageElement.width = 400;

    dogAnchor.append(dogNameElement);
    dogListItem.append(dogAnchor);
    dogListItem.append(dogBreedElement);
    dogListItem.append(dogImageElement);

    document.getElementById("allDogs").append(dogListItem);
}

function allDogs() {
    query("https://dogs-rest.herokuapp.com/v1/dogs")
        .then(arrayDogs => {
            audio.play()
            app.innerHTML = html;
            arrayDogs.map(dog => createDogElement(dog));
        })
        .catch(err => console.error(err));
    }
    
   // setTimeout(()=> {audio.pause(); audio.currentTime =0;}, 3000)
export default allDogs;

// audio.play()
audio.addEventListener("canplaythrough", function () {
        setTimeout(function(){
            audio.pause();
        },
        3000);
}, false); 