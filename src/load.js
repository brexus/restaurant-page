import { loadStart } from "./start";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function clearPage() {
    const mainContent = document.getElementById("content");
    mainContent.innerHTML = "";
}

function loadNavbar() {
    // main container id="content"
    const mainContent = document.getElementById("content");

    // header = logo + navbar
    const headerContainer = document.createElement("div");
    headerContainer.id = "header-container";

    const headerSubcontainer = document.createElement("div");
    headerSubcontainer.id = "header-subcontainer";

    const headerLogoContainer = document.createElement("div");
    headerLogoContainer.id = "header-logo-container";

    const headerLogo = document.createElement("img");
    headerLogo.id = "header-logo";
    headerLogo.src = "./img/logo.png";

    // navbar
    const navbarContainer = document.createElement("nav");
    navbarContainer.id = "navbar-container";

    const navbar = document.createElement("ul");
    navbar.id = "navbar";

    // Start
    const navbarStartLi = document.createElement("li");
    const navbarStartA = document.createElement("a");
    navbarStartA.id = "start";
    navbarStartA.innerText = "Start";

    // Menu
    const navbarMenuLi = document.createElement("li");
    const navbarMenuA = document.createElement("a");
    navbarMenuA.id = "menu";
    navbarMenuA.innerText = "Menu";

    // About us
    const navbarAboutUsLi = document.createElement("li");
    const navbarAboutUsA = document.createElement("a");
    navbarAboutUsA.innerText = "about-us";
    navbarAboutUsA.innerText = "About us";

    // Contact
    const navbarContactLi = document.createElement("li");
    const navbarContactA = document.createElement("a");
    navbarContactA.id = "contact";
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
}

function loadFooter() {
    const mainContent = document.getElementById("content");

    const footer = document.createElement("div");
    footer.innerText = "Szymon Wierzchoś | 2023 Copyright ©";
    footer.id = "footer";

    mainContent.appendChild(footer);
}

function navbarListeners() {
    const start = document.getElementById("start");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    start.addEventListener("click", () => {
        startPageLoad();
    });

    menu.addEventListener("click", () => {
        menuPageLoad();
    });

    contact.addEventListener("click", () => {
        contactPageLoad();
    });
}

function checkMenuButtonListener() {
    const menuBtn = document.getElementById("menuBtn");

    menuBtn.addEventListener("click", () => {
        menuPageLoad();
    });
}

function startPageLoad() {
    clearPage();
    loadNavbar();
    loadStart();
    loadFooter();
    navbarListeners();
}

function menuPageLoad() {
    clearPage();
    loadNavbar();
    loadMenu();
    loadFooter();
    navbarListeners();
}

function contactPageLoad() {
    clearPage();
    loadNavbar();
    loadContact();
    loadFooter();
    navbarListeners();
}

export { startPageLoad, menuPageLoad };
