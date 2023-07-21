function loadMenu() {
    const mainContent = document.getElementById("content");

    // MAIN CONTAINER
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

    // MAIN HEADER
    const mainHeading = document.createElement('div');
    mainHeading.id = 'main-heading';

    const h1 = document.createElement('h1');
    h1.innerHTML = "<span class='h-cursive-gold'>Look at our</span>Menu";

    const mainSeparator = document.createElement('div');
    mainSeparator.classList.add('separator');

    // HEADER APPEND CHILD
    mainHeading.appendChild(h1);
    mainHeading.appendChild(mainSeparator);




    // MENU ITEM CONTAINER 1
    let menuItemContainer1 = document.createElement('div');
    menuItemContainer1.classList.add('menu-item-container');

    let h2 = document.createElement('h2');
    h2.innerText = "1. Margherita";

    let p1 = document.createElement('p');
    p1.innerText = "sauce, mozzarella cheese, oregano";

    let p2 = document.createElement('p');
    p2.classList.add('price');
    p2.innerText = "25 PLN";

    menuItemContainer1.appendChild(h2);
    menuItemContainer1.appendChild(p1);
    menuItemContainer1.appendChild(p2);


    // MENU ITEM CONTAINER 2
    const menuItemContainer2 = document.createElement('div');
    menuItemContainer2.classList.add('menu-item-container');

    h2 = document.createElement('h2');
    h2.innerText = "2. Capricciosa";

    p1 = document.createElement('p');
    p1.innerText = "San Marzano Italian tomato sauce, Fior di latte mozzarella, Prosciutto Cotto ham (traditional Italian cooked ham)";

    p2 = document.createElement('p');
    p2.classList.add('price');
    p2.innerText = "28 PLN";

    menuItemContainer2.appendChild(h2);
    menuItemContainer2.appendChild(p1);
    menuItemContainer2.appendChild(p2);


    // MENU ITEM CONTAINER 3
    const menuItemContainer3 = document.createElement('div');
    menuItemContainer3.classList.add('menu-item-container');

    h2 = document.createElement('h2');
    h2.innerText = "3. Jalapeno";

    p1 = document.createElement('p');
    p1.innerText = "Italian San Marzano tomato sauce, Fior di latte mozzarella, Pancetta (Italian ripening bacon), red onion, garlic, chili pepper";

    p2 = document.createElement('p');
    p2.classList.add('price');
    p2.innerText = "27 PLN";

    menuItemContainer3.appendChild(h2);
    menuItemContainer3.appendChild(p1);
    menuItemContainer3.appendChild(p2);


    // MENU ITEM CONTAINER 4
    const menuItemContainer4 = document.createElement('div');
    menuItemContainer4.classList.add('menu-item-container');

    h2 = document.createElement('h2');
    h2.innerText = "4. Izaura";

    p1 = document.createElement('p');
    p1.innerText = "sauce, mozzarella cheese, ham, corn, champignons, and oregano";

    p2 = document.createElement('p');
    p2.classList.add('price');
    p2.innerText = "32 PLN";

    menuItemContainer4.appendChild(h2);
    menuItemContainer4.appendChild(p1);
    menuItemContainer4.appendChild(p2);
    

    // MENU ITEM CONTAINER 5
    const menuItemContainer5 = document.createElement('div');
    menuItemContainer5.classList.add('menu-item-container');

    h2 = document.createElement('h2');
    h2.innerText = "5. Relax";

    p1 = document.createElement('p');
    p1.innerText = "sauce, mozzarella cheese, oregano";

    p2 = document.createElement('p');
    p2.classList.add('price');
    p2.innerText = "35 PLN";

    menuItemContainer5.appendChild(h2);
    menuItemContainer5.appendChild(p1);
    menuItemContainer5.appendChild(p2);


    // SEPARATORS
    const separator1 = document.createElement('div');
    separator1.classList.add('separator');

    const separator2 = document.createElement('div');
    separator2.classList.add('separator');

    const separator3 = document.createElement('div');
    separator3.classList.add('separator');

    const separator4 = document.createElement('div');
    separator4.classList.add('separator');

    const separator5 = document.createElement('div');
    separator5.classList.add('separator');


    // MAIN APPEND CHILD
    mainContainer.appendChild(mainHeading);
    mainContainer.appendChild(menuItemContainer1);
    mainContainer.appendChild(separator1);
    mainContainer.appendChild(menuItemContainer2);
    mainContainer.appendChild(separator2);
    mainContainer.appendChild(menuItemContainer3);
    mainContainer.appendChild(separator3);
    mainContainer.appendChild(menuItemContainer4);
    mainContainer.appendChild(separator4);
    mainContainer.appendChild(menuItemContainer5);

    mainContent.appendChild(mainContainer);

}

export { loadMenu };

