function serviceSlider(tt) {
    return {
        currentSlide: 0,
        totalSlides: tt, // Total number of services
        init() {
            // Optional: Auto-slide functionality
            if (this.slide) {
                this.autoSlide()
            }

        },
        autoSlide() {
            setInterval(() => {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            }, 5000); // Slide every 5 seconds
        }
    };
}