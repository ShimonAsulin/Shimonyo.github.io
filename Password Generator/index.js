const btnGenerate = document.getElementById('btnGenerate');
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let input4 = document.getElementById('input4')

btnGenerate.addEventListener('click', () => {
    generate(input1);
    generate(input2);
    generate(input3);
    generate(input4);
})

function generate(input) {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
    }
    input.value = password;
}





input1.addEventListener('click', () => {
    if (input1.value === "") {
    } else {
    input1.select();
    navigator.clipboard.writeText(input1.value);
    alert("Copied the password, press C + V to paste ;) ");
}})
input2.addEventListener('click', () => {
    if (input2.value === "") {
    } else {
    input2.select();
    navigator.clipboard.writeText(input2.value);
    alert("Copied the password, press C + V to paste ;) ");
}})
input3.addEventListener('click', () => {
    if (input3.value === "") {
    } else {
    input3.select();
    navigator.clipboard.writeText(input3.value);
    alert("Copied the password, press C + V to paste ;) ");
}})
input4.addEventListener('click', () => {
    if (input4.value === "") {
    } else {
    input4.select();
    navigator.clipboard.writeText(input4.value);
    alert("Copied the password, press C + V to paste ;) ");
}})



