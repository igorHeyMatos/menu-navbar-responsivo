class MenuNavBar {
    constructor(menuJs, navList, navLinks) {
        this.menuJs = document.querySelector(menuJs);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.menuJs.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuJs.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.menuJs) {
            this.addClickEvent();
        }
        return this;
    }
}

const menuJs = new MenuNavBar (
    ".menu",
    ".nav-list",
    ".nav-list li",
);

menuJs.init();