gsap.registerPlugin(ScrollTrigger);

gsap.to('.state__heading', {
  scrollTrigger: {
    trigger: ".state__heading",
    start: "-5% center",
    end: "80% 20%",
    toggleClass: {
      targets: ".state__heading",
      className: "show"
    }
  },
});

gsap.to('.state__content', {
  scrollTrigger: {
    trigger: ".state__content",
    start: "-5% center",
    end: "80% top",
    toggleClass: {
      targets: ".state__image",
      className: "show"
    }
  },
});

gsap.to(".state__content", {
  scrollTrigger: {
    trigger: ".state__content",
    scrub: true,
    pin: true,
    start: "center center",
    end: "center top",
    toggleClass: "is-active",
    ease: "power2",
  }
});

gsap.to(".state__image img", {
  scrollTrigger: {
    trigger: ".state__content",
    scrub: 2,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2",
  },
  y: "-30%"
});

gsap.to(".state__desc-wrapper", {
  scrollTrigger: {
    trigger: ".state__desc-wrapper",
    toggleClass: 'show',
    start: "top center",
    end: "bottom -100%",
  },
});


gsap.to(".intro__zero-waste", {
  scrollTrigger: {
    trigger: ".intro__zero-waste",
    toggleClass: 'show',
    start: "top center",
    end: "bottom -100%",
  },
});




// let el = [...document.querySelectorAll('.intro__state')]

// let options = {
//   rootMargin: '-10%',
//   threshold: 0.0
// }

// let observer = new IntersectionObserver(showItem, options)

// function showItem(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {

//     }
//   })
// }

// el.forEach(item => {
//   observer.observe(item)
// })