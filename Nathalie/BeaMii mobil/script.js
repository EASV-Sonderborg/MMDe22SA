// Get the HTML elements
const frontpageButton = document.querySelector(".btn_frontpage");
const placeButton = document.querySelector(".btn_place");
const localButton = document.querySelector(".btn_local");
const borderButton = document.querySelector(".btn_border");
const scanButton = document.querySelector(".btn_scan");

const phoneImage = document.querySelector(".phone");
const frontpageImage = document.querySelector(".image_frontpage");
const placeImage = document.querySelector(".image_place");
const localImage = document.querySelector(".image_local");
const borderImage = document.querySelector(".image_border");
const scanImage = document.querySelector(".image_scan");

// Set initial z-index values
let zIndexValues = {
    frontpage: 0,
    place: -1,
    local: -1,
    border: -1,
    scan: -1
};

// Function to update z-index values
function updateZIndex() {
    frontpageImage.style.zIndex = zIndexValues.frontpage;
    placeImage.style.zIndex = zIndexValues.place;
    localImage.style.zIndex = zIndexValues.local;
    borderImage.style.zIndex = zIndexValues.border;
    scanImage.style.zIndex = zIndexValues.scan;
}

// Button click event listeners
frontpageButton.addEventListener("click", function() {
    zIndexValues = {
        frontpage: 0,
        place: -1,
        local: -1,
        border: -1,
        scan: -1
    };
    updateZIndex();
    // scanImage.pause();
});

placeButton.addEventListener("click", function() {
    zIndexValues = {
        frontpage: -1,
        place: 0,
        local: -1,
        border: -1,
        scan: -1
    };
    updateZIndex();
});

localButton.addEventListener("click", function() {
    zIndexValues = {
        frontpage: -1,
        place: -1,
        local: 0,
        border: -1,
        scan: -1
    };
    updateZIndex();
});

borderButton.addEventListener("click", function() {
    zIndexValues = {
        frontpage: -1,
        place: -1,
        local: -1,
        border: 0,
        scan: -1
    };
    updateZIndex();
});

scanButton.addEventListener("click", function() {
    zIndexValues = {
        frontpage: -1,
        place: -1,
        local: -1,
        border: -1,
        scan: 0
    };
    updateZIndex();
    scanImage.play();
});
