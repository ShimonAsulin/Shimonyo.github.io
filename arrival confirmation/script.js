const firebaseConfig = {
    apiKey: "AIzaSyCFzWDmhcthHIFAlejDQRqC7yhNlqpfVvY",
    authDomain: "contactform-85272.firebaseapp.com",
    databaseURL: "https://contactform-85272-default-rtdb.firebaseio.com",
    projectId: "contactform-85272",
    storageBucket: "contactform-85272.appspot.com",
    messagingSenderId: "632260630902",
    appId: "1:632260630902:web:9199440dc88ef2d0c08257",
    measurementId: "G-8C3QTYZKTV"
};
firebase.initializeApp(firebaseConfig);

const popUp = document.getElementById('popup')
const container = document.getElementById('container')
const inputa = document.getElementById('name')
const inputb = document.getElementById('count')
const header = document.getElementById('header')
let massagesRef = firebase.database().ref('count')

const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', submitForm)

function focus() {
    document.getElementById("contactForm").style.color="#000"
}
function walcome() {
    header.textContent=`איזה כיף ${inputa.value} מחכים לך🎉`
    header.style.color="#28d434"
    header.style.fontSize="20px"
    header.style.fontWeight="bold"
    header.style.fontFamily="Rubik"
    header.style.marginBottom="10px"
    header.style.marginTop="35px"

}
function blur() {
    document.body.style.background = "";
    // header.style.color="#000"
}

inputa.addEventListener("keyup", (walcome));
inputa.addEventListener("focus", (focus));
inputa.addEventListener("blur", (blur));

inputb.addEventListener("focus", (focus));
inputb.addEventListener("blur", (blur))

//referens massges collaction

// submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    let name = getInputVal('name')
    let count = getInputVal('count')
    
    saveMassage(name, count)
    popUp.style.display = 'flex'
    container.style.display = 'none'
    
}

// function to get get form value

function getInputVal(id) {
    return document.getElementById(id).value;
}
// save masseg
function saveMassage(name, count) {
    let newMassageRef = massagesRef.push();
    newMassageRef.set({
        name: name,
        count: count
    })
}

