function pickImage(){
    options = ["images/i0.jpg", "images/i2.jpg", "images/jessica.jpg"];
    randomImg = options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#header_img");
    img.setAttribute("src", randomImg);
    img.setAttribute("alt", "Random Header Image");
}
function upDate(previewPic){
    const imageContainer = document.getElementById('image');
    imageContainer.style.backgroundImage = `url(${previewPic.src})`;
    imageContainer.innerHTML = previewPic.alt;
}
function unDo(){
    const imageContainer = document.getElementById('image');
    imageContainer.style.backgroundImage = 'none';
    imageContainer.innerHTML = 'Hover over an image below to display it here';
}      