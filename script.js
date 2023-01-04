const container = document.getElementById("container");
const currentItem = document.getElementById("current-item");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");



const items = ["Item 1", "Item 2", "Item 3", "Item 4"];



let currentIndex = 0;
var billedenummer = 0;
var tekst = "img/" + billedenummer +".png"
displayCurrentItem()

function displayCurrentItem() {

    billedenummer++;
   

    if(billedenummer>10){
        billedenummer=1;
    }
    tekst = "img/" + billedenummer +".png"
    // Create an img element
    const imgElement = document.createElement('img');
    // Set the src attribute of the img element to the path of the image you want to display
    imgElement.src = tekst;
    // Set the width and height of the image (optional)
    imgElement.width = '300';
    imgElement.height = '400';
  
    // Clear the innerHTML of the currentItem element
    currentItem.innerHTML = '';
    // Append the img element to the currentItem element
    currentItem.appendChild(imgElement);
    currentItem.style.left = "0px";
  }

function swipeLeft() {
  currentItem.style.left = "-100%";
  setTimeout(() => {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    displayCurrentItem();
  }, 500);
}

function swipeRight() {
  currentItem.style.left = "100%";
  setTimeout(() => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    displayCurrentItem();
  }, 500);
}

leftButton.addEventListener("click", swipeLeft);
rightButton.addEventListener("click", swipeRight);