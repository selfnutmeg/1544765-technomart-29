const feedbackLink = document.querySelector(".help-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackCloseButton = feedbackModal.querySelector(".close-modal-feedback");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackName = feedbackModal.querySelector("#feedback-name");
const feedbackEmail = feedbackModal.querySelector("#feedback-email");
const feedbackMessage = feedbackModal.querySelector("#feedback-text");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";


try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
};


feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    if (storageName && storageEmail) {
        feedbackName.value = storageName;
        feedbackEmail.value = storageEmail;
        feedbackMessage.focus();
    } else if (storageName && !storageEmail) {
        feedbackName.value = storageName;
        feedbackEmail.focus();
    } else if (!storageName && storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackName.focus();
    } else {
        feedbackName.focus();
    }
});


feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    } else if (isStorageSupport) {
          localStorage.setItem("name", feedbackName.value);
          localStorage.setItem("email", feedbackEmail.value);
    }
});


feedbackCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && feedbackModal.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.remove("modal-error");
    }
});


const mapLink = document.querySelector(".map-container-link");
const mapModal = document.querySelector(".modal-map");
const mapCloseButton = mapModal.querySelector(".close-modal-map");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
});


mapCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && mapModal.classList.contains("modal-show")) {
        evt.preventDefault();
        mapModal.classList.remove("modal-show");
    }
});


const slides = document.querySelectorAll(".slider-page");
const slideButtonLeft = document.querySelector(".slider-left-button");
const slideButtonRight = document.querySelector(".slider-right-button");
const slideDots = document.querySelectorAll(".slider-dot");


let swipeSlides = function () {
    for (let slide of slides) {
        if (slide.classList.contains("current-slide")) {
            slide.classList.remove("current-slide");
        } else {
            slide.classList.add("current-slide");
        }
    }

    for (let slideDot of slideDots) {
            if (slideDot.classList.contains("current-dot")) {
            slideDot.classList.remove("current-dot");
        } else {
            slideDot.classList.add("current-dot");
        }
    }
};


slideButtonLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    swipeSlides();
});

slideButtonRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    swipeSlides();
});


for (let dot of slideDots) {
    dot.addEventListener("click", function (evt) {
        evt.preventDefault();
        swipeSlides();
    });
}


const optionsButtonFirst = document.querySelector(".options-button-1");
const optionsButtonSecond = document.querySelector(".options-button-2");
const optionsButtonThird = document.querySelector(".options-button-3");

const optionSlideFirst = document.querySelector(".option-slide-1");
const optionSlideSecond = document.querySelector(".option-slide-2");
const optionSlideThird = document.querySelector(".option-slide-3");


optionsButtonFirst.addEventListener("click", function (evt) {
    evt.preventDefault();

    optionsButtonSecond.classList.remove("current-options-button");
    optionsButtonThird.classList.remove("current-options-button");
    optionsButtonFirst.classList.add("current-options-button");

    optionSlideSecond.classList.remove("current-option-slide");
    optionSlideThird.classList.remove("current-option-slide");
    optionSlideFirst.classList.add("current-option-slide");
});


optionsButtonSecond.addEventListener("click", function (evt) {
    evt.preventDefault();

    optionsButtonFirst.classList.remove("current-options-button");
    optionsButtonThird.classList.remove("current-options-button");
    optionsButtonSecond.classList.add("current-options-button");

    optionSlideFirst.classList.remove("current-option-slide");
    optionSlideThird.classList.remove("current-option-slide");
    optionSlideSecond.classList.add("current-option-slide");
});


optionsButtonThird.addEventListener("click", function (evt) {
    evt.preventDefault();

    optionsButtonFirst.classList.remove("current-options-button");
    optionsButtonSecond.classList.remove("current-options-button");
    optionsButtonThird.classList.add("current-options-button");

    optionSlideSecond.classList.remove("current-option-slide");
    optionSlideFirst.classList.remove("current-option-slide");
    optionSlideThird.classList.add("current-option-slide");
});

