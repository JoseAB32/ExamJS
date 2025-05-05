function CambiarColor() {
    var color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;

    if (color === "red") {
        document.getElementById("color").value = "white";
    }

    if (color === "white") {
        document.getElementById("color").value = "red";
    }
}