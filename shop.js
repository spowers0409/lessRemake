const navbarData = {
    navItems: [
        { name: "3DPM", link: "index.html" },
        { name: "Shop", link: "shop.html", active: true },
        { name: "Custom Requests", link: "request.html" },
        { name: "Design Services", link: "design.html" },
        { name: "Resources", link: "resources.html" },
        { name: "Gallery", link: "gallery.html" }
    ]
};

const shopInfoData = {
    title: "Welcome to Our Shop",
    description: "Here you'll find a variety of 3D printed products, ranging from decor to functional items. Explore our selection and find something unique for you."
};

const productsData = {
    products: [
        { name: "Anubis", imgSrc: "images/anubis.jpg" },
        { name: "Alien", imgSrc: "images/alien.jpg" },
        { name: "Darth Maul", imgSrc: "images/darthmaul.jpg" },
        { name: "Bulbasaur", imgSrc: "images/Bulbasaur.jpg" },
        { name: "Egyptian", imgSrc: "images/egyptian.jpg" },
        { name: "Recaro", imgSrc: "images/Recaro.jpg" },
        { name: "TIE Fighter", imgSrc: "images/tiefighter.jpg" },
        { name: "Saber Skull", imgSrc: "images/saberskull.jpg" }
    ]
};

function renderTemplate(templateId, targetId, data) {
    const template = document.getElementById(templateId).innerHTML;
    const rendered = Mustache.render(template, data);
    document.getElementById(targetId).innerHTML = rendered;
}

document.addEventListener("DOMContentLoaded", function() {
    renderTemplate('navbar-template', 'navbar', navbarData);
    renderTemplate('shop-info-template', 'shop-info', shopInfoData);
    renderTemplate('product-list-template', 'product-list', productsData);
});
