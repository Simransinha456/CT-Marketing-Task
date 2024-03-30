document.addEventListener("DOMContentLoaded", function () {
    const carouselImages = document.querySelectorAll(".carousel-image");

    carouselImages.forEach(image => {
        image.addEventListener("click", function () {
            const bigImageSrc = this.src;
            const bigImage = document.querySelector(".image4");
            bigImage.src = bigImageSrc;
        });
    });
});
