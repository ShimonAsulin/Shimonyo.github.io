let searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", (event) => {
    let search = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name")

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();

        if (currentName.includes(search)) {
            allNamesDOMCollection[i].style.display = "block"
        }else {
            allNamesDOMCollection[i].style.display = "none"
        }
    }
})