let thenav = document.querySelector("nav");







window.addEventListener("scroll", function() {
    if (thenav.style.top === "0px" || window.scrollY === 0) {
        thenav.style.backgroundColor = "#27273c";
        thenav.style.setProperty("border-radius", "0px");
        thenav.style.setProperty("width", "100%")
    } else {
        thenav.style.setProperty("border-radius", "30px");
        thenav.style.setProperty("width", "1200px")
    }
    if (window.scrollY > 400) {
        thenav.style.backgroundColor = "#86377b";
    } else {
        thenav.style.backgroundColor = "#27273c";
    }
})


// Sliding cards


let firstSub = document.getElementsByClassName("sub-card")[0];
let secondSub = document.getElementsByClassName("sub-card")[1];
let main = document.querySelector(".main-card");
let rightbtn = document.querySelector(".right");
let leftbtn = document.querySelector(".left");

// ----------------------

let fstimg = document.querySelector(".first-img");
let sndimg = document.querySelector(".second-img");
let thrdimg = document.querySelector(".third-img");

// ----------------------

let fstname = document.querySelector(".first-name");
let sndname = document.querySelector(".second-name");
let thrdname = document.querySelector(".third-name");

// ----------------------

let fstopinion = document.querySelector(".first-opinion");
let sndopinion = document.querySelector(".second-opinion");
let thrdopinion = document.querySelector(".third-opinion");




let group1 = [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lUwMqq5lrBsXYnOqa3dKtauVW9Q0rT6aMw&s",
    "data:image/jpeg;base64,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"
]


let group2 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxEz3eq2oWIHIJMDNe7mHDrP7jFhUqICXjA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhybPI1WyvuPvXpxE9UGcHVNY05Rn1k4TNQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcxKvNdS_m2u21A3f1eq6wnd7jBrabcfYDw&s"
]

let group3 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAOwpJVsl8rBCoeahgNtpcTOAexW_6L9nTA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s"
] 






// Initial setup
let currentGroup;

// Initialize the display based on local storage or default to group1
function initializeGroup() {
    const storedGroup = window.localStorage.getItem("currentGroup");
    currentGroup = storedGroup ? parseInt(storedGroup) : 1;

    // Display the current group
    if (currentGroup === 1) {
        displayCards1();
    } else if (currentGroup === 2) {
        displayCards2();
    } else if (currentGroup === 3) {
        displayCards3();
    }
}

// Function to display group1
function displayCards1() {
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            window.localStorage.setItem("img1", group1[i]);
            window.localStorage.setItem("name1", "Alice");
            window.localStorage.setItem("opinion1", "Great app for keeping my tasks organized!");

            let srcimg1 = window.localStorage.getItem("img1");
            let name1 = window.localStorage.getItem("name1");
            let opinion1 = window.localStorage.getItem("opinion1");
            fstimg.src = srcimg1;
            fstname.innerHTML = name1;
            fstopinion.innerHTML = opinion1;
        } else if (i === 1) {
            window.localStorage.setItem("img2", group1[i]);
            window.localStorage.setItem("name2", "Bob");
            window.localStorage.setItem("opinion2", "The app is very helpful for my daily planning.");

            let srcimg2 = window.localStorage.getItem("img2");
            let name2 = window.localStorage.getItem("name2");
            let opinion2 = window.localStorage.getItem("opinion2");
            sndimg.src = srcimg2;
            sndname.innerHTML = name2;
            sndopinion.innerHTML = opinion2;
        } else {
            window.localStorage.setItem("img3", group1[i]);
            window.localStorage.setItem("name3", "Charlie");
            window.localStorage.setItem("opinion3", "A must-have tool for managing tasks efficiently.");

            let srcimg3 = window.localStorage.getItem("img3");
            let name3 = window.localStorage.getItem("name3");
            let opinion3 = window.localStorage.getItem("opinion3");
            thrdimg.src = srcimg3;
            thrdname.innerHTML = name3;
            thrdopinion.innerHTML = opinion3;
        }
    }
}

// Function to display group2
function displayCards2() {
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            window.localStorage.setItem("img", group2[i]);
            window.localStorage.setItem("name", "Spider man");
            window.localStorage.setItem("opinion", "This app is a lifesaver for my team projects. We can assign tasks and track progress all in one place!");

            let srcimg = window.localStorage.getItem("img");
            let name = window.localStorage.getItem("name");
            let opinion = window.localStorage.getItem("opinion");
            fstimg.src = srcimg;
            fstname.innerHTML = name;
            fstopinion.innerHTML = opinion;
        } else if (i === 1) {
            window.localStorage.setItem("img2", group2[i]);
            window.localStorage.setItem("name2", "Omar Khan");
            window.localStorage.setItem("opinion2", "I wish it could integrate with more apps. It's great, but adding more third-party connections would make it perfect.");

            let srcimg2 = window.localStorage.getItem("img2");
            let name2 = window.localStorage.getItem("name2");
            let opinion2 = window.localStorage.getItem("opinion2");
            sndimg.src = srcimg2;
            sndname.innerHTML = name2;
            sndopinion.innerHTML = opinion2;
        } else {
            window.localStorage.setItem("img3", group2[i]);
            window.localStorage.setItem("name3", "User39439583");
            window.localStorage.setItem("opinion3", "طرش يجدعان عن تجربه و شكرا للي عمل الموقع ده");

            let srcimg3 = window.localStorage.getItem("img3");
            let name3 = window.localStorage.getItem("name3");
            let opinion3 = window.localStorage.getItem("opinion3");
            thrdimg.src = srcimg3;
            thrdname.innerHTML = name3;
            thrdopinion.innerHTML = opinion3;
        }
    }
}

// Function to display group3
function displayCards3() {
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            window.localStorage.setItem("img4", group3[i]);
            window.localStorage.setItem("name4", "Mohannad");
            window.localStorage.setItem("opinion4", "The user interface is so intuitive that I didn't even need a tutorial to get started.");

            let srcimg4 = window.localStorage.getItem("img4");
            let name4 = window.localStorage.getItem("name4");
            let opinion4 = window.localStorage.getItem("opinion4");
            fstimg.src = srcimg4;
            fstname.innerHTML = name4;
            fstopinion.innerHTML = opinion4;
        } else if (i === 1) {
            window.localStorage.setItem("img5", group3[i]);
            window.localStorage.setItem("name5", "Batman");
            window.localStorage.setItem("opinion5", "Even Gotham needs order. This app ensures I stay organized, whether I'm tracking criminal activity or my daily tasks. It's efficient, no distractions—just pure focus.");

            let srcimg5 = window.localStorage.getItem("img5");
            let name5 = window.localStorage.getItem("name5");
            let opinion5 = window.localStorage.getItem("opinion5");
            sndimg.src = srcimg5;
            sndname.innerHTML = name5;
            sndopinion.innerHTML = opinion5;
        } else {
            window.localStorage.setItem("img6", group3[i]);
            window.localStorage.setItem("name6", "not me");
            window.localStorage.setItem("opinion6", "I love the visual layout. The color-coded tasks make it easier for me to prioritize my day.");

            let srcimg6 = window.localStorage.getItem("img6");
            let name6 = window.localStorage.getItem("name6");
            let opinion6 = window.localStorage.getItem("opinion6");
            thrdimg.src = srcimg6;
            thrdname.innerHTML = name6;
            thrdopinion.innerHTML = opinion6;
        }
    }
}

// Function to toggle forward through groups
function toggleDisplayForward() {
    if (currentGroup === 1) {
        displayCards1();
        currentGroup = 2;
    } else if (currentGroup === 2) {
        displayCards2();
        currentGroup = 3;
    } else {
        displayCards3();
        currentGroup = 1;
    }

    // Save the current group to local storage
    window.localStorage.setItem("currentGroup", currentGroup);
}

// Function to toggle backward through groups
function toggleDisplayBackward() {
    if (currentGroup === 1) {
        displayCards3();
        currentGroup = 3;
    } else if (currentGroup === 2) {
        displayCards1();
        currentGroup = 1;
    } else {
        displayCards2();
        currentGroup = 2;
    }

    // Save the current group to local storage
    window.localStorage.setItem("currentGroup", currentGroup);
}

// Initialize the display on page load
initializeGroup();

// Attach the event listeners to the buttons
rightbtn.addEventListener("click", toggleDisplayForward);
leftbtn.addEventListener("click", toggleDisplayBackward);
