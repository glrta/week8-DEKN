const loggedIn = `
    <a href = "/log-out">Log Out</a>
    <a href="#">View My Dogs</a>
`;

const loggedOut = /*html*/ `
    <a href="/log-in">Log In</a>
    <a href="/sign-up">Sign Up here</a>
`;

const header = document.querySelector("nav");
const token = localStorage.getItem("token");

function isLoggedIn() {
    if (token) header.append(loggedIn);
    else header.append(loggedOut);
}

isLoggedIn();
