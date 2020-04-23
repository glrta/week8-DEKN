import query from "../query.js";
const app = document.querySelector("#app");

const html = /*html*/ `
<h1>HERE IS YOUR DOG</h1>

`;

function oneDog() {
    app.append(html);
}

export default oneDog;
