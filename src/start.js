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
    menuBtn.id = "menuBtn";
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


export { loadStart };