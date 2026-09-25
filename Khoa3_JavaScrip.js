function Update(element) {
    console.log("Update function called");

    var PreviewPic = document.getElementById("image");

    console.log("Alt:", element.alt);
    console.log("Source:", element.src);

    PreviewPic.innerHTML = element.alt;
    PreviewPic.style.backgroundImage = "url('" + element.src + "')";
}

function Undo() {
    console.log("Undo function called");

    var PreviewPic = document.getElementById("image");

    PreviewPic.style.backgroundImage = "url('')";
    PreviewPic.innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
