let imagesDog = [
    "15320.JPG", 
    "16604.JPG", 
    "183C3DD0.JPG", 
    "18501.JPG", 
    "18515.JPG", 
    "IMG_2687.jpg", 
    "IMG_2750.jpg", 
    "IMG_2753.jpg", 
    "IMG_2843.jpg", 
    "IMG_2920.jpg", 
    "IMG_2966.jpg", 
    "IMG_5231.JPG", 
    "IMG_5446.jpg"];

function render(){
    let content = document.getElementById('content_dog');
    content.innerHTML = '';

    for (let index = 0; index < imagesDog.length; index++) {
        content.innerHTML += 
        `<img src=./img/${imagesDog[index]} class="small_images" onclick="toggleOverlay(${index})">`;        
    }
}

function toggleOverlay(index) {
    document.getElementById('overlay').classList.toggle("d_none");
    displayBigImages(index);
}

function displayBigImages(index) {
    let big_images = document.getElementById("overlay");
    let currentImage = index;

    big_images.innerHTML = `<div class="image_big">
                                <h1> Doggo </h1>
                                <img id="big_img" src="./img/${imagesDog[index]}">
                                    <div id="arrow">
                                        <img class="arrow_left" onclick="prevImage(${currentImage}, event)" src="./img/arrow_left.png" alt="backwards">
                                        <img class="arrow_right" onclick="nextImage(${currentImage}, event)" src="./img/arrow_left.png" alt="forwards">
                                    </div>
                            </div>`;                                
}

function prevImage(currentImage, event) {
        
    let index = currentImage - 1 ;
    if ( index < 1) {
        let index = imagesDog.length - 1;
        event.stopPropagation();
        displayBigImages(index);
    }else {
    event.stopPropagation();
    displayBigImages(index);} 
}

function nextImage(currentImage, event) {
    
    let index = currentImage + 1 ;
    if ( index >= imagesDog.length) {
        let index = 0;
        event.stopPropagation()
        displayBigImages(index);
    } else {
    event.stopPropagation()
    displayBigImages(index);}

}