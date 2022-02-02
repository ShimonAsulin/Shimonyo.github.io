const header = document.getElementById('header');
let dropdown = document.getElementById('dropdown');
let input = document.getElementById('input');
const button = document.getElementById('send');
let user =  localStorage.getItem("user");
const edit = document.getElementById('edit-name');
if (!user) {    
     user = prompt("Please enter your name😎")
}

localStorage.setItem("user", user )
header.textContent += user;
// collect
let quickWhatsApp = null
button.addEventListener("click", () => {
    quickWhatsApp = `https://wa.me/${dropdown.value}${input.value}`
    window.open(quickWhatsApp, '_blank');
    // alert(quickWhatsApp);
})
// keyboard key
input.addEventListener("keyup", (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('send').click();
  }
});
// change name
edit.addEventListener("click", () => {
    localStorage.clear()
    location.reload();
})