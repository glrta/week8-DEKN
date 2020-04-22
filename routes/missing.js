const app = document.querySelector("#app");

const html = /*html*/ `
<h1>Error! Dogs have eaten this page!!!</h1>
`;

function missing() {
    document.title = "Page not found!";
    app.innerHTML = html;
}

export default missing;
