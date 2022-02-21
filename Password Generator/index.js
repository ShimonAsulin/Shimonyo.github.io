

function copyToClipboard(event) {
    const input = event.target;
    if (!!input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            width: "300px",
            title: 'copied to clipboard',
          })
    }
}
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



const textInputElements = document.querySelectorAll('input[type="text"]');
textInputElements.forEach(input => input.addEventListener('click', (copyToClipboard)));



btnGenerate.addEventListener('click', () => {
    textInputElements.forEach((input => generate(input)));
})    

