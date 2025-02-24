function navBarFunction() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.position = "fixed";  
        x.style.backgroundColor = "#444"; // Ensure the menu has a background color
        x.style.width = "100%"; // Full width
        x.style.top = "70px"; // Adjusted positioning below the navbar
        x.style.left = "0";
        x.style.padding = "10px";
        x.style.zIndex = "1000"; // Ensures it stays on top
    }
}