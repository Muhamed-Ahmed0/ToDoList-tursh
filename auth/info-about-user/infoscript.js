// infoscript.js
export let username;
export let date;

document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementsByTagName("form")[0];

    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent the form from submitting

        username = document.getElementById("username").value;
        date = document.getElementById("date").value;

        if (username === "" || date === "") {
            alertbox.render({
                  alertIcon: 'error',
                  title: 'Sorry!',
                  message: 'Please fill in all fields',
                  btnTitle: 'Ok',
                  border:true
            });
        } else {
            console.log("Username:", username);
            console.log("Date:", date);
            window.location.href = "http://127.0.0.1:5500/main/TODO.html";
        }
    };
});
