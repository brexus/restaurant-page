function loadContact() {
    const mainContent = document.getElementById("content");

    // MAIN CONTAINER
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

    // MAIN HEADER
    const mainHeading = document.createElement('div');
    mainHeading.id = 'main-heading';

    const h1 = document.createElement('h1');
    h1.innerHTML = "<span class='h-cursive-gold'>Check out</span>Contact";

    const mainSeparator = document.createElement('div');
    mainSeparator.classList.add('separator');

    // HEADER APPEND CHILD
    mainHeading.appendChild(h1);
    mainHeading.appendChild(mainSeparator);



    // CONTACT ITEM CONTAINER 1
    let contactItemContainer1 = document.createElement('div');
    contactItemContainer1.classList.add('contact-item-container');

    let h2 = document.createElement('h2');
    h2.innerText = "Pizzeria";

    let p1 = document.createElement('p');
    p1.innerText = "NONA Pizzeria, Lublin, st. Nałęczowska 13A";

    let p2 = document.createElement('p');
    p2.classList.add('telephone');
    p2.innerText = "tel. 543 683 045";

    contactItemContainer1.appendChild(h2);
    contactItemContainer1.appendChild(p1);
    contactItemContainer1.appendChild(p2);


    // CONTACT ITEM CONTAINER 2
    const contactItemContainer2 = document.createElement('div');
    contactItemContainer2.classList.add('menu-item-container');

    h2 = document.createElement('h2');
    h2.innerText = "Collaboration";

    p1 = document.createElement('p');
    p1.innerText = "BTS Company, Lublin, st. Solidarności 3/54";

    p2 = document.createElement('p');
    p2.classList.add('telephone');
    p2.innerText = "tel. 543 683 050";

    contactItemContainer2.appendChild(h2);
    contactItemContainer2.appendChild(p1);
    contactItemContainer2.appendChild(p2);

    // GOOGLE MAP
    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1765.8664335494736!2d22.519358770543988!3d51.250159770913086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472259c51e80e785%3A0x3ac07af7ab5a68d7!2sNa%C5%82%C4%99czowska%2013A%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1689937166941!5m2!1spl!2spl";
    // map.style = 'width="1000" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
    map.setAttribute("width","1000");
    map.setAttribute("height","300");
    map.setAttribute("style","border:0;");
    map.setAttribute("allowfullscreen","");
    map.setAttribute("loading","lazy");
    map.setAttribute("referrerpolicy","no-referrer-when-downgrade");



    // SEPARATORS
    const separator1 = document.createElement('div');
    separator1.classList.add('separator');

    const separator2 = document.createElement('div');
    separator2.classList.add('separator');



    // MAIN APPEND CHILD
    mainContainer.appendChild(mainHeading);
    mainContainer.appendChild(contactItemContainer1);
    mainContainer.appendChild(separator1);
    mainContainer.appendChild(contactItemContainer2);
    mainContainer.appendChild(separator2);
    mainContainer.appendChild(map);

    mainContent.appendChild(mainContainer);

}

export { loadContact };