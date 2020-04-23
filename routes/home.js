import query from "../query.js";
const app = document.querySelector("#app");

const html = /*html*/ `
<h1>Doggy Home!</h1>
<p>A page to view all of the lovely doggies</p>
<a href="./dogs">All Dogs</a>
`;

// const loggedIn = `
// <header>
//     <a href = "/log-out">Log Out</a>
//     <a href="#">View My Dogs</a>
// </header>
// ${html}
// `;

// const loggedOut = /*html*/ `
// <header>
//     <a href="/log-in">Log In</a>
//     <a href="/sign-up">Sign Up here</a>
// </header>
// ${html}
// `;

function home() {
    //if access token
    // if (localStorage.getItem("token")) {
    //     app.innerHTML = loggedIn;
    // } else {
    //     app.innerHTML = loggedOut;
    // }
    app.innerHTML = html;
}

export default home;
