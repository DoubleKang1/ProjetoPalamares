function navbarERodape() {
    document.write(`<header>
    <nav>
        <ul class="navbar">
            <li>
                <a href="./index.html">HOME</a>
            </li>
            <li>
                <a href="./contato.html">FALE CONOSCO</a>
            </li>
            <li>
                <a href="./favoritos.html">FAVORITOS</a>
            </li>
            <input id="pesquisar" type="search" placeholder="Buscar homenageado...">
            <li>
                <a href="./login.html">Login</a>
            </li>
        </ul>
    </nav>
</header>`);
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();