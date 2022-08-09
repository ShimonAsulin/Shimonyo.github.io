const container = document.getElementById("container")
const header = document.getElementById("header")
async function getAPIs() {
    let res = await fetch('https://api.publicapis.org/entries')
    let API = await res.json()
    return API
}
function headerCount(data) {
    header.innerHTML = `
    we have ${data.count} API's for you, just Search!
    `
}
function getAPIhtml(myAPIs) {
    return ` <div class="my-api">
        <div class="my-api-name">Name & Category: <a href=${myAPIs.Link}>${myAPIs.API}(${myAPIs.Category})</a></div>
        <div class="my-api-description">Description: ${myAPIs.Description}</div>
        <div class="my-api-auth">Auth: ${myAPIs.Auth ? myAPIs.Auth: 'none'} </div>
        <div class="my-api-https">Support HTTPS: ${myAPIs.HTTPS}</div>
    </div>`
}

function displayAPIs(myAPIs) {
   return  container.innerHTML = `${myAPIs.map(api => getAPIhtml(api)).join('')}`   
}

getAPIs().then(APIs => {
    console.log(APIs)
    headerCount(APIs)
    filterAPIs(APIs)
   }
    )  
    .catch(e => console.log(`Error: ${e}`))
    
function filterAPIs(APIs) {
    const input = document.getElementById("myInput")
    input.addEventListener("input", () => {
        
        const inputValue = input.value.toUpperCase()
        const APIsToShow = APIs.entries.filter(api => api.API.toUpperCase().includes(inputValue))
        displayAPIs(APIsToShow)
    })
}



