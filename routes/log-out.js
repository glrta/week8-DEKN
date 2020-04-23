import query from "../query.js";
const app = document.querySelector("#app");

// const html; /*html template literal*/

function logOut() {
    const button = document.querySelector("#logOutBtn");
}

export default logOut;

function home({redirect}) {
    const token = localStorage.getItem("token");
    if (!token) {
        app.innerHTML = loggedOut;
    } else {
        app.innerHTML = loggedIn;
        app.querySelector("#logOut").addEventListener("click", () => {
            window.localStorage.removeItem("token");
            redirect("/");
        });
    }
}
