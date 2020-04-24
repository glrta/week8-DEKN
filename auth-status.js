const header = document.querySelector("#navBar");

function isLoggedIn() {
    const link1 = document.querySelector("#link1");
    const link2 = document.querySelector("#link2");
    const token = localStorage.getItem("token");
    if (!token) {
        link1.href = "/log-in";
        link1.textContent = "Log In";
        link2.href = "/sign-up";
        link2.textContent = "Sign Up";
    } else {
        link1.href = "/log-out";
        link1.textContent = "Log Out";
        link2.href = "/user"; // View my dogs
        link2.textContent = "View My Dogs";
    }
}

export default isLoggedIn;
