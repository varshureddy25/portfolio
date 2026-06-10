// Dark Mode using Local Storage

function toggleTheme() {

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    if (document.body.classList.contains("bg-dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Recently Viewed Project using Session Storage

function viewProject(projectName) {

    sessionStorage.setItem("recentProject", projectName);

    document.getElementById("recentProject").innerHTML =
        projectName;
}

// Load Stored Data

window.onload = function () {

    // Theme

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("bg-dark");
        document.body.classList.add("text-white");
    }

    // Recent Project

    let project =
        sessionStorage.getItem("recentProject");

    if (project) {

        document.getElementById("recentProject").innerHTML =
            project;
    }

    // Form Data

    document.getElementById("name").value =
        localStorage.getItem("name") || "";

    document.getElementById("email").value =
        localStorage.getItem("email") || "";

    document.getElementById("subject").value =
        localStorage.getItem("subject") || "";

    document.getElementById("message").value =
        localStorage.getItem("message") || "";
};

// Contact Form Auto Save using Local Storage

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("name").addEventListener("input", function () {
        localStorage.setItem("name", this.value);
    });

    document.getElementById("email").addEventListener("input", function () {
        localStorage.setItem("email", this.value);
    });

    document.getElementById("subject").addEventListener("input", function () {
        localStorage.setItem("subject", this.value);
    });

    document.getElementById("message").addEventListener("input", function () {
        localStorage.setItem("message", this.value);
    });

});
function saveContact(callback) {

    let name = document.getElementById("name").value;

    localStorage.setItem("name", name);

    callback(name);
}
function showSuccess(name) {

    const status = document.getElementById("status");

    if (status) {
        status.innerHTML =
        "Thank you " + name + "! Your data has been saved.";
    }
}