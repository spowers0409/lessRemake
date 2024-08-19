const navbarData = {
    navItems: [
        { name: "3DPM", link: "index.html" },
        { name: "Shop", link: "shop.html" },
        { name: "Custom Requests", link: "request.html", active: true},
        { name: "Design Services", link: "design.html" },
        { name: "Resources", link: "resources.html" },
        { name: "Gallery", link: "gallery.html" }
    ]
};

const designInfoData = {
    title: "Custom Requests",
    description: "We do not offer professional 3D design services tailored to your needs. Whether you're looking for a custom model or need help with a complex project, our team is here to assist."
};

const carouselData = {
    slides: [
        {
            active: true,
            images: [
                { src: "images/alien.jpg", alt: "Design 1" },
                { src: "images/anubis.jpg", alt: "Design 2" },
                { src: "images/bananas.jpg", alt: "Design 3" }
            ]
        },
        {
            active: false,
            images: [
                { src: "images/Dead_Trooper.jpg", alt: "Design 4" },
                { src: "images/Recaro.jpg", alt: "Design 5" },
                { src: "images/Bulbasaur.jpg", alt: "Design 6" }
            ]
        }
    ]
};

const formData = {
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Contact Email",
    emailPlaceholder: "Enter your email",
    projectDetailsLabel: "Tell us about your project",
    projectDetailsPlaceholder: "Describe your project",
    fileLabel: "Attach Files",
    submitButtonText: "Submit Request"
};

function renderTemplate(templateId, targetId, data) {
    const template = document.getElementById(templateId).innerHTML;
    const rendered = Mustache.render(template, data);
    document.getElementById(targetId).innerHTML = rendered;
}

document.addEventListener("DOMContentLoaded", function() {
    renderTemplate('navbar-template', 'navbar', navbarData);
    renderTemplate('design-info-template', 'design-info', designInfoData);
    renderTemplate('carousel-template', 'carousel', carouselData);
    renderTemplate('design-form-template', 'designRequestForm', formData);
});
