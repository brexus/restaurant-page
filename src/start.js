
function loadNavbar () {
    // main container id="content"
    const mainContent = document.getElementById("content");


    // header = logo + navbar
    const headerContainer = document.createElement('div');
    headerContainer.id = "header-container";

    const headerSubcontainer = document.createElement('div');
    headerSubcontainer.id = "header-subcontainer";

    const headerLogoContainer = document.createElement('div');
    headerLogoContainer.id = "header-logo-container";

    const headerLogo = document.createElement('img');
    headerLogo.id = "header-logo";
    headerLogo.src = "./img/logo.png";
    

    // navbar
    const navbarContainer = document.createElement('nav');
    navbarContainer.id = "navbar-container";

    const navbar = document.createElement('ul');
    navbar.id = "navbar";

    const navbarStartLi = document.createElement('li');
    const navbarStartA = document.createElement('a');
    navbarStartA.innerText = "Start";

    const navbarMenuLi = document.createElement('li');
    const navbarMenuA = document.createElement('a');
    navbarMenuA.innerText = "Menu";

    const navbarAboutUsLi = document.createElement('li');
    const navbarAboutUsA = document.createElement('a');
    navbarAboutUsA.innerText = "About us";

    const navbarContactLi = document.createElement('li');
    const navbarContactA = document.createElement('a');
    navbarContactA.innerText = "Contact";


    // APPEND CHILD

    headerLogoContainer.appendChild(headerLogo);

    navbarStartLi.appendChild(navbarStartA);
    navbarMenuLi.appendChild(navbarMenuA);
    navbarAboutUsLi.appendChild(navbarAboutUsA);
    navbarContactLi.appendChild(navbarContactA);

    navbar.appendChild(navbarStartLi);
    navbar.appendChild(navbarMenuLi);
    navbar.appendChild(navbarAboutUsLi);
    navbar.appendChild(navbarContactLi);
    navbarContainer.appendChild(navbar);

    headerSubcontainer.appendChild(headerLogoContainer);
    headerSubcontainer.appendChild(navbarContainer);
    
    headerContainer.appendChild(headerSubcontainer);

    mainContent.appendChild(headerContainer);

};


function loadStart() {
    const mainContent = document.getElementById("content");

    const startBackground = document.createElement('div');
    startBackground.id = "start-background";

    const startText = document.createElement('div');
    startText.id = "start-text";

    const h2 = document.createElement('h2');
    h2.innerText = "Welcome to best pizzeria";
    h2.classList.add("h-cursive-gold");

    const h1 = document.createElement('h1');
    h1.innerText = "Call and order!";

    const startTelephoneContainer = document.createElement('div');
    startTelephoneContainer.id = "start-telephone-container";
    
    const h3 = document.createElement('h3');
    h3.innerText = "543 683 045";

    const menuBtn = document.createElement('button');
    menuBtn.id = "menu";
    menuBtn.innerText = "Check the menu";

    // APPEND CHILD

    startTelephoneContainer.appendChild(h3);

    startText.appendChild(h2);
    startText.appendChild(h1);
    startText.appendChild(startTelephoneContainer);
    startText.appendChild(menuBtn);

    startBackground.appendChild(startText);

    mainContent.appendChild(startBackground);
}

export { loadNavbar, loadStart };