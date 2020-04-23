import query from "../query.js";
const app = document.querySelector("#app");

const basicHtml = /*html*/`
  <div id="oneDog"></div>
  <div id="message"><div>
`;

const loggedIn = /*html*/`
  <a href="/update">update</a>
  <a href="delete">delete</a>
`

function createDogElement(dog) {
    const dogListItem = document.createElement("section");
  
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

    document.getElementById("oneDog").append(dogListItem);
}

function oneDog({url}) {
  app.innerHTML= basicHtml;
  const dogId = url.searchParams.get("id");
  query(`https://dogs-rest.herokuapp.com/v1/dogs/${dogId}`)
  .then(dog => {
      createDogElement(dog)
      if (localStorage.getItem("token")) {
        document.querySelector("section").append(loggedIn)
      }
    })
  .catch(error => {
      console.error(error);
      document.querySelector("#message").append("The Dog is drinking toilet water!")
  })
}

export default oneDog;
