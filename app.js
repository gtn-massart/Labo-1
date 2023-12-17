const burgerMenu = document.querySelector(".burger-menu");
const navLinkList = document.querySelector(".nav-link-list");
const inputContainer = document.querySelector(".input-container");

  
  burgerMenu.addEventListener('click', handleClick);

  function handleClick() {

    burgerMenu.classList.toggle('active');

    if (burgerMenu.classList.contains("active")) {
      navLinkList.style.display = "none";
      inputContainer.style.display = "none";
    } else {
      navLinkList.style.display = "flex";
      inputContainer.style.display = "flex";
    }
    
  }

