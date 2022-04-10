const formEl = document.getElementById('form-El')
const colorEl = document.querySelector('#color')
const modeEl = document.querySelector('#mode')
const containerEl = document.querySelector('#container')


render()


function render() {
    let color = colorEl.value.slice(1);
    let mode = modeEl.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&format=json&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(data => {
        containerEl.innerHTML = data.colors.map((color) => {
            return `<div class="color-container">
                        <div class="bg-color" style="background:${color.hex.value}"></div>
                        <p class="color-name">
                        <span class="name-El">${color.hex.value}</span>
                        </p>
            </div>`
        }).join('')
    })
    console.log(color)
    console.log(mode)
}

formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    render()
})