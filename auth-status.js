const header = document.querySelector("#navBar");
const token = localStorage.getItem("token");

function isLoggedIn() {
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    if (token) {
        link1.href = "/log-out";
        link1.textContent = "Log Out";
        link2.href = "/user"; // View my dogs
        link2.textContent = "View My Dogs";
    } else {
        link1.href = "/log-in";
        link1.textContent = "Log In";
        link2.href = "/sign-up";
        link2.textContent = "Sign Up";
    }

    header.append(link1);
    header.append(link2);
}

isLoggedIn();
