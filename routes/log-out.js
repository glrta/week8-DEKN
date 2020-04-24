const app = document.querySelector("#app");
import isLoggedIn from "../auth-status.js";

function logOut({redirect}) {
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("token");
    isLoggedIn();
    redirect("/");
}

export default logOut;
