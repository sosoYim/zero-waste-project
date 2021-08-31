gsap.registerPlugin(ScrollTrigger);

gsap.to(".state__content", {
  scrollTrigger: {
    markers: true,
    trigger: ".state__content",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "is-active",
    ease: "power2"
  }
});

gsap.to(".state__image img", {
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});

// gsap.utils.toArray(".intro").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false
//   });
// });


// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });