document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = [
        { src: "images/anubis.jpg", description: "A rusted Anubis artifact." },
        { src: "images/alien.jpg", description: "A rusted Alien artifact." },
        { src: "images/Bulbasaur.jpg", description: "A Bulbasaur from Pokemon." },
        { src: "images/darthmaul.jpg", description: "A skull of Darth Maul." },
        { src: "images/Dead_Trooper.jpg", description: "Dead trooper keychains." },
        { src: "images/bananas.jpg", description: "Super Mario Bananas." },
        { src: "images/Recaro.jpg", description: "A Recaro style racing chair phone holder." },
        { src: "images/mewtwo.jpg", description: "A decorative skull of Mewtwo pokemon." },
        { src: "images/onimasks.jpg", description: "A colection of Oni Masks." },
    ];

    const galleryContainer = document.getElementById('galleryImages');
    const template = document.getElementById('gallery-template').innerHTML;

    const renderedGallery = Mustache.render(template, { galleryImages });
    galleryContainer.innerHTML = renderedGallery;

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', function() {
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('imageModalLabel');

            modalImage.src = this.src;
            modalTitle.textContent = this.alt;
        });
    });
});
