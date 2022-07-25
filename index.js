import ServiceFirestore from "https://cdn.jsdelivr.net/gh/GabrielSessions/firestore-js/v0.4/index.js";

let motorPair;

const serviceSPIKE = document.getElementById("service_spike").getService();
serviceSPIKE.executeAfterInit(async function() {
    
    motorPair = new serviceSPIKE.MotorPair("C", "D");
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
    
    console.log(robot1Id);
    
    const onChange = (doc) => {
        console.log(doc)
        switch(doc.action) {
            case "forward":
                motorPair.start_tank(50,50);
                break;
            case "backward":
                motorPair.start_tank(-50,-50);
                break;
            default:
                motorPair.stop();
        }
    }
    
    const unsub = db.listenToDocument(robot1Id, onChange);
    
    setTimeout(() => {
        //unsub();
    }, 15000);
});

serviceSPIKE.init();



