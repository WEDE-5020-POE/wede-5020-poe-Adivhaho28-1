// PAGE LOADED
window.onload = function () {
console.log("Snatche Wigs Website Loaded");
};

// PRODUCT SEARCH
function searchProducts() {

let input =
document.getElementById("searchInput");

let filter =
input.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card => {

let text =
card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}

// LIGHTBOX GALLERY
function openImage(src){

document.getElementById("lightbox")
.style.display = "flex";

document.getElementById("lightbox-img")
.src = src;

}

function closeImage(){

document.getElementById("lightbox")
.style.display = "none";

}

// ORDER FORM VALIDATION
function validateOrderForm(){

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let quantity =
document.getElementById("quantity").value;

let error =
document.getElementById("orderError");

error.innerHTML = "";

if(name === ""){

error.innerHTML =
"Please enter your full name.";

return false;
}

if(email === ""){

error.innerHTML =
"Please enter your email.";

return false;
}

if(quantity < 1){

error.innerHTML =
"Quantity must be at least 1.";

return false;
}

alert(
"Order submitted successfully! We will contact you shortly."
);

return true;
}

//ENQUIRY FORM VALIDATION
function validateEnquiryForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("enquiryError");

    error.innerHTML = "";

    if(name === ""){
        error.innerHTML = "Please enter your name.";
        return false;
    }

    if(email === ""){
        error.innerHTML = "Please enter your email address.";
        return false;
    }

    if(message.length < 10){
        error.innerHTML = "Please enter a message of at least 10 characters.";
        return false;
    }

    alert("Thank you for your enquiry. We will get back to you soon!");

    return true;
}

// CONTACT FORM VALIDATION
function validateContactForm(){

let name =
document.getElementById("contactName").value.trim();

let email =
document.getElementById("contactEmail").value.trim();

let message =
document.getElementById("message").value.trim();

let error =
document.getElementById("contactError");

error.innerHTML = "";

if(name === ""){

error.innerHTML =
"Please enter your name.";

return false;
}

if(email === ""){

error.innerHTML =
"Please enter your email address.";

return false;
}

if(message.length < 10){

error.innerHTML =
"Message must be at least 10 characters.";

return false;
}

alert(
"Message sent successfully!"
);

return true;
}

// AUTO PRODUCT FILL
const params =
new URLSearchParams(window.location.search);

const product =
params.get("product");

if(product){

let field =
document.getElementById("product");

if(field){

field.value = product;

}
}

// SCROLL TO TOP BUTTON
window.onscroll = function(){

let btn =
document.getElementById("topBtn");

if(btn){

if(document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300){

btn.style.display = "block";

}else{

btn.style.display = "none";
}
}
};

function topFunction(){

document.body.scrollTop = 0;

document.documentElement.scrollTop = 0;

}

//

function openModal(productName) {
    document.getElementById("orderModal").style.display = "block";
    document.getElementById("product").value = productName;
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
}

// close when clicking outside box
window.onclick = function(event) {
    let modal = document.getElementById("orderModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stops page reload

    // hide form/modal
    document.getElementById("orderModal").style.display = "none";

    // show confirmation
    document.getElementById("confirmationMessage").style.display = "block";
});

function closeConfirmation() {
    document.getElementById("confirmationMessage").style.display = "none";
}