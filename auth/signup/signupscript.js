document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded");

    let form = document.getElementById("auth");

    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent the form's default submission

        let pass = document.getElementById("pass").value;
        let confirmpass = document.getElementById("confirm-pass").value;

        console.log("Password:", pass);
        console.log("Confirm Password:", confirmpass);

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
            console.log("Passwords match, redirecting...");
            window.location.href = 'http://127.0.0.1:5500/auth/info-about-user/info.html'; // Redirects to the desired URL
        }
    };
});
