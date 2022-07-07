const pw = document.getElementById("password")
const confPw = document.getElementById("confpassword")

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    const errorMsg = document.getElementById("error-pw");
    if (pw.value !== confPw.value) {
        e.preventDefault();
        pw.classList.add("error");
        confPw.classList.add("error");
        errorMsg.style.display = "block";
    }
})

