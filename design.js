const navbarData = {
    navItems: [
        { name: "3DPM", link: "index.html" },
        { name: "Shop", link: "shop.html" },
        { name: "Custom Requests", link: "request.html" },
        { name: "Design Services", link: "design.html", active: true },
        { name: "Resources", link: "resources.html" },
        { name: "Gallery", link: "gallery.html" }
    ]
};

const designInfoData = {
    title: "Design Services",
    description: "We offer professional 3D design services tailored to your needs. Whether you're looking for a custom model or need help with a complex project, our team is here to assist."
};

const carouselData = {
    slides: [
        {
            active: true,
            images: [
                { src: "images/designgauntlet.png", alt: "Design 1" },
                { src: "images/designghost.png", alt: "Design 2" },
                { src: "images/designknives.png", alt: "Design 3" }
            ]
        },
        {
            active: false,
            images: [
                { src: "images/designrobot.png", alt: "Design 4" },
                { src: "images/designsword.png", alt: "Design 5" },
                { src: "images/tiefighter.jpg", alt: "Design 6" }
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
