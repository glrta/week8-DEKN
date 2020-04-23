import query from "../query.js";

const app = document.querySelector("#app");

const html = `
    <h2>Login</h2>
    <form id="loginForm">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />

        <label for="password">Doggy Password: </label>
        <input type="password" id="password" name="password" />

        <div id="message"></div>

        <button type="submit">Log in</button>
    </form>
`;

function logIn({redirect}) {
    app.innerHTML = html;
    app.querySelector("#loginForm").addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObj = Object.fromEntries(formData);
        query("https://dogs-rest.herokuapp.com/v1/users/login", {
            method: "POST",
            body: JSON.stringify(formObj)
        })
        .then(body => {
            console.log(body)
                window.localStorage.setItem("token", body.access_token);
                redirect("/dogs"); // After login go to show all dogs
            })
            .catch(error => {
                console.error(error);
                app.querySelector("#message").append("Something Went Wrong!!");
            });
    });
}

export default logIn;
