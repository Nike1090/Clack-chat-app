function toggleImage() {
    const iconImage = document.getElementById('iconImage');
    const bodyElement = document.querySelector('body');
    const formCard = document.querySelector('.card');

    if (iconImage.src.includes('sunny.png')) {
        iconImage.src = iconImage.src.replace('sunny.png', 'moon.png'); // Replace the image source
        bodyElement.style.backgroundColor = "#fff";
        bodyElement.style.color = "#181924";
        formCard.style.color = "#181924";
        formCard.style.backgroundColor = "#fff";
        formCard.style.border = "rgb(33,32,50) solid 1px";
        
    } else {
        iconImage.src = iconImage.src.replace('moon.png', 'sunny.png'); // Replace the image source
        bodyElement.style.backgroundColor = "";
        bodyElement.style.color = "";
        formCard.style.color = "";
        formCard.style.backgroundColor = "";
        formCard.style.border = "";
    }
    
}