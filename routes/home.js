import query from "../query.js";
const app = document.querySelector("#app");

const html = /*html*/ `
<h1>Doggy Home!</h1>
`;

function home() {
    app.innerHTML = html;
}

export default home;
