document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded");

    let form = document.getElementById("auth");

    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent the form's default submission

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const pass = document.getElementById("pass").value;
        const confirmpass = document.getElementById("confirm-pass").value;

        console.log("Password:", pass);
        console.log("Confirm Password:", confirmpass);

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailRegex.test(email) === true && email !== "") {

            if (pass !== confirmpass) {
                alertbox.render({
                    alertIcon: 'error',
                    title: 'Oops!',
                    message: 'Passwords do not match',
                    btnTitle: 'Ok',
                    themeColor: '#860eaf',
                    btnColor: '#860eaf',
                    border: true
                });
            } else {
                window.location.href = `/main/TODO.html?username=${encodeURIComponent(username)}`;
            }
    } else {
        alertbox.render({
            alertIcon: 'error',
            title: 'Oops!',
            message: 'Please enter a valid email address',
            btnTitle: 'Ok',
            themeColor: '#860eaf',
            btnColor: '#860eaf',
            border: true
        });
    }
    };
});
