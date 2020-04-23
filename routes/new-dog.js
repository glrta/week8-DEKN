import query from "../query.js";
const app = document.querySelector("#app");

const loggedInHtml = `
<h1>Add a new dog!!</h1>
    <form id="newDogForm">
    <label for="name">Dog's name: </label>
    <input type="text" id="name" name="name"/>

    <label for="breed">Dog Breed: </label>
    <input type="text" id="breed" name="breed" />

    <div id="message"><div>

    <button>Save Doggie </button>
</form>
`;

const loggedOutHtml = `
<h1>Please 
<a href="/log-in">login</a> or 
<a href="/sign-up">sign up</a> to continue
</h1>`;

function newDog() {
    const token = localStorage.getItem("token");

    if (!token) {
        app.innerHTML = loggedOutHtml;
    } else {
        app.innerHTML = loggedInHtml;
        app.querySelector("newDogForm").addEventListener("submit", event => {
            event.preventDefault();
            const form = new FormData(event.target);
            const formObj = Object.fromEntries(form);

            query("https://dogs-rest.herokuapp.com/v1/dogs", {
                method: "POST",
                body: JSON.stringify(formObj),
                headers: {
                    "content-type": "application/json"
                }
            });
        });
    }
}

export default newDog;
