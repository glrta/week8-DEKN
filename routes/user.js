import query from "../query.js";
const app = document.querySelector("#app");

const html = `
    <h1>My Doggy Page</h1>
    <section id="container"></section>
`;

function getUserDogs(id) {
    query(`https://dogs-rest.herokuapp.com/v1/dogs/`)
        .then(dogsArray => {
            let dogNewArray = [];
            dogsArray.map(dog => {
                if (dog.owner == id) dogNewArray.push(dog);
            });
            return dogNewArray;
        })
        .then(dogNewArray => dogNewArray.map(dog => createDogElement(dog)));
}

function createDogElement(dog) {
    const dogListItem = document.createElement("article");
    const dogNameElement = document.createElement("h2");
    dogNameElement.textContent = dog.name;
    const dogBreedElement = document.createElement("h3");
    dogBreedElement.textContent = dog.breed;
    const dogImageElement = document.createElement("img");
    dogImageElement.src = dog.image;
    dogImageElement.alt = `Image of lovely ${dog.name}`;
    dogImageElement.width = 400;

    dogListItem.append(dogNameElement);
    dogListItem.append(dogBreedElement);
    dogListItem.append(dogImageElement);

    document.getElementById("container").append(dogListItem);
}

function allMyDogs({url}) {
    app.innerHTML = html;
    const userId = window.localStorage.getItem("userId");
    getUserDogs(userId);
}

export default allMyDogs;
