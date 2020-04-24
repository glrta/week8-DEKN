import query from "../query.js";
const app = document.querySelector("#app");


const html = /*html*/ `
<h1>Doggy Home!</h1>
<p>A page to view all of the lovely doggies</p>
<a href="./dogs">All Dogs</a>
`;


function home() {

    app.innerHTML = html;
}

export default home;
