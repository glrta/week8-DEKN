import query from "../query.js";
const app = document.querySelector("#app");

const html = `
    <h2>Sign up</h2>
    <form id="signupForm">
        <label for="name">Username: </label>
        <input type="text" id="name" name="name" />

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />

        <label for="password">Doggy Password: </label>
        <input type="password" id="password" name="password" />

        <div id="message"></div>

        <button type="submit">Sign Up!</button>
    </form>
`;

function signUp({redirect}) {
    app.innerHTML = html;
    app.querySelector("#signupForm").addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObj = Object.fromEntries(formData);

        query("https://dogs-rest.herokuapp.com/v1/users", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formObj)
        })
            .then(body => {
                window.localStorage.setItem("token", body.access_token);
                // window.localStorage.setItem("userId", body.id)
                redirect("/dogs"); // After signup go to show all dogs
            })
            .catch(error => {
                console.error(error);
                app.querySelector("#message").append("Something Went Wrong!!");
            });
    });
}


export default signUp;
