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
const popUp1 = document.getElementById('popup1')
const container = document.getElementById('container')
const inputa = document.getElementById('name')
const inputb = document.getElementById('count')
const header = document.getElementById('header')
const backgroundWarp = document.getElementById('wrap-background')

let massagesRef = firebase.database().ref('count')

const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', submitForm)

//referens massges collaction

// submit form
function submitForm(e) {
    e.preventDefault();

    //get values
    let name = getInputVal('name')
    let count = getInputVal('count')
    
    saveMassage(name, count)
    popUp.style.display = 'flex'
    popUp.style.height = '100vh'
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

