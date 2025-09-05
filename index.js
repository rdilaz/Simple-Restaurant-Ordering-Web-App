import menuArray from './data.js'

const menuContainer = document.getElementById('menu-container')
const orderContainer = document.getElementById('order-container')
const orderItemsList = document.getElementById('order-items-list')
const totalPriceElement = document.getElementById('total-price')
const orderFormContainer = document.getElementById('complete-order-container')


let cart = []

document.addEventListener('click', function(e){
    if(e.target.dataset.id && e.target.classList.contains('add-food-btn')){
        handleAddItem(e.target.dataset.id)
    } else if (e.target.dataset.id && e.target.classList.contains('remove-btn')){
        handleRemoveItem(e.target.dataset.index)
    } else if (e.target.classList.contains('order-btn')) {
        handleOrder()
    } else if(e.target.classList.contains('pay-btn')){
        handlePayment(e)
    }
})

function handleOrder() {
    orderFormContainer.classList.remove('invisible')
}

function handlePayment(e){
    e.preventDefault()
    
    orderFormContainer.innerHTML = `
        <div class="order-complete-message">
            <h2>Order Complete!</h2>
            <p>Please rate your experience:</p>
            <div id="rating-container" class="rating-container">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <button id="submit-rating-btn">Submit Rating</button>
        </div>
    `
    initializeRatingSystem()
}


function initializeRatingSystem() {
    const stars = document.querySelectorAll('#rating-container .fa-star');
    const ratingContainer = document.getElementById('rating-container');
    const submitRatingBtn = document.getElementById('submit-rating-btn')

    
    let currentRating = -1; 

    const highlightStars = (index) => {
        stars.forEach((star, i) => {
            if (i <= index){
                star.classList.add('checked')
            } else {
                star.classList.remove('checked')
            }
        })
    }

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            highlightStars(index);
        });
        
        
        star.addEventListener('click', () => {
            currentRating = index; 
            console.log(`Rating selected: ${currentRating + 1}`);
        });
    });

 
    ratingContainer.addEventListener('mouseleave', () => {
        highlightStars(currentRating);
    });

    submitRatingBtn.addEventListener('click', function(){
        handleRatingSubmit(currentRating + 1)
    })
}

function handleRatingSubmit(currentRating){
    let message = ''
    if(currentRating === 5){
        message 
    }
    orderFormContainer.innerHTML = `<h3>Thank you for the feedback!<h3>`

}


function handleRemoveItem(index){
    cart.splice(index, 1)
    if(cart.length > 0) {
        renderOrder()
    } else {
        cart = []
        orderContainer.classList.add('invisible')
    }
}

function handleAddItem(itemId){
    orderContainer.classList.remove('invisible')
    cart.push(itemId)
    renderOrder()
}

function renderOrder(){
    let orderItemsHtml = ''
    let price = 0

    cart.forEach(function(Id, index){
        const itemObject = menuArray[Id]
        orderItemsHtml += `
        <li class="order-item">
            <div class="food-details">
                <span class="item-name">${itemObject.name}</span>
                <button class="remove-btn" data-id="${itemObject.id}" data-index="${index}">remove</button>
            </div>
            <p class="price">$${itemObject.price}</p>
        </li>
    `
        price += itemObject.price
    })
    totalPriceElement.innerHTML = `$${price}`;
    orderItemsList.innerHTML = orderItemsHtml
}

function renderMenu(){
    let text = ''
    menuArray.forEach(function(item) {
        text += `
                <article class="menu-item">
                    <p class="food-emoji">${item.emoji}</p>
                    <div class="food-text-container">
                        <h2 class="food-title">${item.name}</h2>
                        <p class="food-ingredients">${item.ingredients.join(", ")}</p>
                        <p class="food-price">$${item.price}</p>
                    </div>
                    <button class="add-food-btn" data-id="${item.id}">+</button> 
                </article>
        `
    })
    return text;
}

menuContainer.innerHTML = renderMenu()