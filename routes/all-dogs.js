import query from "../query.js";
const app = document.querySelector("#app");

const html = /*html*/ `
<h1>All the dogs!</h1>
<ul id="allDogs"></ul>
`;
// [{id: 1, name: "Luna", breed: "Cocker Spaniel", owner: 1}];

function createDogElement(dog) {
    const dogListItem = document.createElement("li");
    const dogAnchor = document.createElement("a");
    dogAnchor.href = `./dogs/${dog.id}`;
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
            app.innerHTML = html;
            arrayDogs.map(dog => createDogElement(dog));
        })
        .catch(err => console.error(err));
}

export default allDogs;
