

const btnGenerate = document.getElementById('btnGenerate');
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let input4 = document.getElementById('input4')


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
            title: 'password copied to clipboard',
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

btnGenerate.addEventListener('click', () => {
    generate(input1);
    generate(input2);
    generate(input3);
    generate(input4);
})    


const textInputElements = document.querySelectorAll('input[type="text"]');
textInputElements.forEach(input => input.addEventListener('click', (copyToClipboard)));














