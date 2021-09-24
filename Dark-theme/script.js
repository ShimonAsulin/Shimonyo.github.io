var btn = document.getElementById("btn");

btn.onclick = function() {
    btn.classList.toggle("night");
    document.body.classList.toggle("Dark-theme"); 
    if (document.body.classList.contains("Dark-theme")) {
        icon.src = "sun.png";
    }
    else {
        icon.src = "moon.png";
    }
    
}