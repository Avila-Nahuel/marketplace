const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}




function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')

}




function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

   if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name:'Bike',
    price: 130,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});
productList.push({
    name:'Car',
    price: 120,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});
productList.push({
    name:'Pen',
    price: 120,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});
productList.push({
    name:'Bed',
    price: 120,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});
productList.push({
    name:'Bed',
    price: 120,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});
productList.push({
    name:'Bed',
    price: 120,
    image: 'https://media.gettyimages.com/id/1428217516/es/foto/lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against-jamaica-at-red-bull.jpg?s=612x612&w=gi&k=20&c=pexeiEp6Ryxvtlt2LLd65qhfrRUfflgyJq0jUDCSYA4=',
});


for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div')

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}
