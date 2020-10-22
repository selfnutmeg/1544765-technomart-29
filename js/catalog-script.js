const cartLinks = document.querySelectorAll(".card-button");
const cartModal = document.querySelector(".modal-cart");
const cartCloseButton = cartModal.querySelector(".close-modal-cart");
const cartModalButton = cartModal.querySelector(".modal-cart-button");


console.log('hy');

for (let cartLink of cartLinks) {
    cartLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartModal.classList.add("modal-show");
    })
};


cartCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
});


cartModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && cartModal.classList.contains("modal-show")) {
        evt.preventDefault();
        cartModal.classList.remove("modal-show");
    }
});
