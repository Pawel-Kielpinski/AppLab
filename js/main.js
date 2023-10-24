const hamburgerTop = document.querySelector(".header__menu-span--top");
const hamburgerMiddle = document.querySelector(".header__menu-span--middle");
const hamburgerBottom = document.querySelector(".header__menu-span--bottom");
const headerMenu = document.querySelector(".header__menu");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let menuOpeningCounter = 0;

function openMobileMenu() {
  if (window.innerWidth < 1200) {
    // Check the window width
    if (menuOpeningCounter % 2 === 0) {
      // cross lines
      hamburgerTop.style.transform = "rotate(45deg) translate(4px, -2px)"; //cross hamburger
      hamburgerBottom.style.transform = "rotate(-45deg) translate(4px, -1px)";
      // hide middle hamburger line
      hamburgerMiddle.style.transform = "rotate(0deg) scale(0, 0.2)"; //cross hamburger
      //  ------------------------------------------------------
      headerMenu.style.opacity = "1";
      headerMenu.style.transition = "opacity 0.5s ease";
      // -------------------------------------------------------
      main.style.display = "none"; //lock the "main" block
      footer.style.display = "none"; //lock the "footer" block
    } else {
      hamburgerTop.style.transform = "none"; // restore top lines
      hamburgerMiddle.style.transform = "none"; // restore middle lines
      hamburgerBottom.style.transform = "none"; // restore bottom lines
      // --------------------------------------------------------------
      headerMenu.style.opacity = "0"; // Hide modal
      headerMenu.style.transition = "opacity 0.5s ease"; //animate modal closure
      // -----------------------------------------------------------------------
      main.style.display = "block"; //unlock the "main" block
      footer.style.display = "block"; //unlock the "footer" block
    }
    menuOpeningCounter++; //subtract one opening
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let submenuOpeningCounterBlog = 0;
let submenuOpeningCounterPages = 0;

function openMobileSubmenu(submenu) {
  if (window.innerWidth < 1200) {
    // Check the window width
    if (
      submenu === "header__submenu-list--blog" &&
      submenuOpeningCounterBlog % 2 === 0
    ) {
      document.querySelector(".header__submenu-list--blog").style.display =
        "flex"; //open submenu "Blog"
      submenuOpeningCounterBlog++; //add one opening
    } else if (
      submenu === "header__submenu-list--pages" &&
      submenuOpeningCounterPages % 2 === 0
    ) {
      document.querySelector(".header__submenu-list--pages").style.display =
        "flex"; //open submenu "Pages"
      submenuOpeningCounterPages++; //add one opening
    } else if (
      submenu === "header__submenu-list--blog" &&
      submenuOpeningCounterBlog % 2 !== 0
    ) {
      document.querySelector(".header__submenu-list--blog").style.display =
        "none"; //close submenu "Blog"
      submenuOpeningCounterBlog--; //subtract one opening
    } else if (
      submenu === "header__submenu-list--pages" &&
      submenuOpeningCounterPages % 2 !== 0
    ) {
      document.querySelector(".header__submenu-list--pages").style.display =
        "none"; //close submenu "Pages"
      submenuOpeningCounterPages--; //subtract one opening
    }
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openDesktopSubmenu(submenu, arrow) {
  if (window.innerWidth >= 1200) {
    // Check the window width

    // Close the remaining submenus while opening a specific one
    if (submenu === "header__submenu-list--blog") {
      document.querySelector(".header__submenu-list--blog").style.display =
        "flex"; // Show specific submenu
      document.querySelector(
        ".header__submenu-label--blog-arrow"
      ).style.transform = "rotate(135deg)"; // Rotate the arrow of the open submenu
      document.querySelector(".header__submenu-list--pages").style.display =
        "none"; // Close the rest of the submenus
      document.querySelector(
        ".header__submenu-label--pages-arrow"
      ).style.transform = "rotate(-45deg)"; // Restore the position of the other arrows
    } else if (submenu === "header__submenu-list--pages") {
      document.querySelector(".header__submenu-list--pages").style.display =
        "flex"; // Show specific submenu
      document.querySelector(
        ".header__submenu-label--pages-arrow"
      ).style.transform = "rotate(135deg)"; // Rotate the arrow of the open submenu
      document.querySelector(".header__submenu-list--blog").style.display =
        "none"; // Close the rest of the submenus
      document.querySelector(
        ".header__submenu-label--blog-arrow"
      ).style.transform = "rotate(-45deg)"; // Restore the position of the other arrows
    }

    // --------------------------------------------------------------------------------------
    const submenus = document.querySelectorAll(".header__submenu-list"); // Get all submenus
    const timeoutDuration = 1200; // Time to close the submenu window
    // --------------------------------------------------------------------------------------

    submenus.forEach(function (element) {
      // Iterate through all submenus with class 'header__submenu-list'

      let autoCloseTimer;

      element.addEventListener("mouseover", () => {
        clearTimeout(autoCloseTimer); // Reset timer when mouse over an element
      });

      element.addEventListener("mouseout", () => {
        // Listening for the mouse cursor to leave
        autoCloseTimer = setTimeout(() => {
          // Restore default arrow position
          element.style.display = "none"; // Close the currently open submenu window with a time delay
          // -----------------------------------------------------------------------------------------
          if (
            document.querySelector(".header__submenu-label--blog-arrow").style
              .transform === "rotate(135deg)" // Rotate the arrow of the open submenu
          ) {
            document.querySelector(
              ".header__submenu-label--blog-arrow"
            ).style.transform = "rotate(-45deg)"; // Restore the position of the other arrows
          } else if (
            document.querySelector(".header__submenu-label--pages-arrow").style
              .transform === "rotate(135deg)" // Rotate the arrow of the open submenu
          ) {
            document.querySelector(
              ".header__submenu-label--pages-arrow"
            ).style.transform = "rotate(-45deg)"; // Restore the position of the other arrows
          }
          // ----------------------------------------------------------------------------------
        }, timeoutDuration);
      });

      autoCloseTimer = setTimeout(() => {
        element.style.display = "none"; // Close the currently open submenu window with a time delay
      }, timeoutDuration);
    });
  }
}
