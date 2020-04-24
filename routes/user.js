import query from "../query.js";
const app = document.querySelector("#app");

const html = `
    <h1>My Doggy Page</h1>
    <section id="container"></section>
`;
// const loggedIn = `
// <div class="delete-update">
//   <a class="update-button">update</a>
//   <a class="delete-button">delete</a>
// </div>
// `;
function getUserDogs(id) {
    query(`https://dogs-rest.herokuapp.com/v1/dogs/`)
        .then(dogsArray => {
            let dogNewArray = [];
            dogsArray.map(dog => {
                if (dog.owner == id) dogNewArray.push(dog);
            });
            return dogNewArray;
        })
        .then(dogNewArray => {
            dogNewArray.map(dog => {
                createDogElement(dog)
                // document.querySelector(`.dog${dog.id}`).innerHTML += loggedIn
                
            })
        });
}

function createDogElement(dog) {
    const dogListItem = document.createElement("article");
    dogListItem.classList.add(`dog${dog.id}`)
    const dogNameElement = document.createElement("h2");
    dogNameElement.textContent = dog.name;
    const dogBreedElement = document.createElement("h3");
    dogBreedElement.textContent = dog.breed;
    const dogImageElement = document.createElement("img");
    dogImageElement.src = dog.image;
    dogImageElement.alt = `Image of lovely ${dog.name}`;
    dogImageElement.width = 400;

    // Update Button 
    const dogUpdateBtn = document.createElement("a")
    dogUpdateBtn.classList.add("update-button");
    dogUpdateBtn.textContent = "Update";
    dogUpdateBtn.href = `/update?id=${dog.id}`;
    // Delete Button
    const dogDeleteBtn = document.createElement("a")
    dogDeleteBtn.classList.add("delete-button");
    dogDeleteBtn.textContent = "delete";
    dogDeleteBtn.href = `/delete?id=${dog.id}`

    // dogListItem.append(dogUpdateBtn,dele)
    dogListItem.append(dogNameElement, dogBreedElement, dogImageElement, dogUpdateBtn, dogDeleteBtn);
    // dogListItem.append(dogBreedElement);
    // dogListItem.append(dogImageElement);

    document.getElementById("container").append(dogListItem);
}

function allMyDogs({url}) {
    app.innerHTML = html;
    const userId = window.localStorage.getItem("userId");
    getUserDogs(userId);
}


export default allMyDogs;
