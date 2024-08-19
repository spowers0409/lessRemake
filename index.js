document.addEventListener("DOMContentLoaded", function() {
    const navbarData = {
        navItems: [
            { name: "3DPM", link: "index.html", active: true },
            { name: "Shop", link: "shop.html" },
            { name: "Custom Requests", link: "request.html" },
            { name: "Design Services", link: "design.html" },
            { name: "Resources", link: "resources.html" },
            { name: "Gallery", link: "gallery.html" }
        ]
    };

    const aboutData = {
        aboutTitle: "About 3DPM",
        aboutContent: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]
    };

    const galleryData = {
        galleryImages: [
            { src: "images/bananas.jpg", description: "Super Mario Bananas", title: "Bananas", imgSrc: "images/bananas.jpg" },
            { src: "images/onimasks.jpg", description: "Oni Masks on Stands", title: "Oni Masks", imgSrc: "images/onimasks.jpg" },
            { src: "images/tiefighter.jpg", description: "Star Wars TIE Fighter", title: "TIE Fighter", imgSrc: "images/tiefighter.jpg" }
        ]
    };

    function renderTemplate(templateId, targetId, data) {
        const template = document.getElementById(templateId).innerHTML;
        const rendered = Mustache.render(template, data);
        document.getElementById(targetId).innerHTML = rendered;
    }

    renderTemplate('navbar-template', 'navbar', navbarData);
    renderTemplate('about-template', 'about-section', aboutData);
    renderTemplate('gallery-template', 'galleryImages', galleryData);

    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const title = image.getAttribute('data-title');
            const description = image.getAttribute('data-description');
            const imgSrc = image.getAttribute('data-imgsrc');

            document.getElementById('imageModalLabel').innerText = title;
            document.getElementById('modalImage').src = imgSrc;
            document.getElementById('modalDescription').innerText = description;
        });
    });
});
