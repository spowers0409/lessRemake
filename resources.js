const navbarData = {
    navItems: [
        { name: "3DPM", link: "index.html" },
        { name: "Shop", link: "shop.html" },
        { name: "Custom Requests", link: "request.html" },
        { name: "Design Services", link: "design.html" },
        { name: "Resources", link: "resources.html", active: true },
        { name: "Gallery", link: "gallery.html" }
    ]
};

const resourcesInfoData = {
    title: "Resources",
    description: "Explore our resources to learn more about 3D printing, from beginner guides to advanced techniques."
};

const socialMediaData = {
    socialLinks: [
        { url: "https://www.facebook.com/profile.php?id=61550654567763", iconClass: "facebook" },
        { url: "https://www.instagram.com/heill_heimr/", iconClass: "instagram" },
        { url: "https://snapchat.com/yourprofile", iconClass: "snapchat" },
        { url: "https://github.com/spowers0409", iconClass: "github" }
    ]
};

const blogPostsData = {
    posts: [
        {
            imgSrc: "images/whatis3d.jpg",
            title: "What is 3D Printing?",
            description: "3D printing, also known as additive manufacturing, is a revolutionary technology that creates three-dimensional objects from digital models."
        },
        {
            imgSrc: "images/production.jpg",
            title: "Prototype to Production",
            description: "The journey from prototype to production is a critical phase that bridges the gap between innovative ideas and tangible products."
        },
        {
            imgSrc: "images/medical3d.jpg",
            title: "Printing for Healthcare",
            description: "One of the most impactful applications of 3D printing in healthcare is the creation of custom prosthetics and orthotics."
        },
        {
            imgSrc: "images/business.jpg",
            title: "Starting a 3D Printing Service Business",
            description: "In recent years, 3D printing has evolved from a niche technology to a mainstream tool with a wide range of applications."
        }
    ]
};

function renderTemplate(templateId, targetId, data) {
    const template = document.getElementById(templateId).innerHTML;
    const rendered = Mustache.render(template, data);
    document.getElementById(targetId).innerHTML = rendered;
}

document.addEventListener("DOMContentLoaded", function() {
    renderTemplate('navbar-template', 'navbar', navbarData);
    renderTemplate('resources-info-template', 'resources-info', resourcesInfoData);
    renderTemplate('social-media-template', 'social-media', socialMediaData);
    renderTemplate('blog-posts-template', 'blog-posts', blogPostsData);
});
