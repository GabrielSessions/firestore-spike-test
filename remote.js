import ServiceFirestore from "https://cdn.jsdelivr.net/gh/GabrielSessions/firestore-js/v0.4/index.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZ8oZJwMnp5ryTRc4aPeXA6ZgbMKJA2lM",
    authDomain: "firestore-test-a1847.firebaseapp.com",
    projectId: "firestore-test-a1847",
    storageBucket: "firestore-test-a1847.appspot.com",
    messagingSenderId: "574025000743",
    appId: "1:574025000743:web:691bdd8d8a44bb1e76ab02"
};

const db = new ServiceFirestore(firebaseConfig, "robots")
const robot1Query = await db.query("number", "==", 1);
const robot1Id = robot1Query[0];

const forwardButton = document.getElementById("forward");
forwardButton.addEventListener("click", function() {
    db.updateDocument({action: "forward"}, robot1Id);
});

const backwardButton = document.getElementById("backward");
backwardButton.addEventListener("click", function() {
    db.updateDocument({action: "backward"}, robot1Id);
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function() {
    db.updateDocument({action: "none"}, robot1Id);
});