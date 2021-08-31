gsap.registerPlugin(ScrollTrigger);

const showEl = gsap.utils.toArray('.state__heading')
showEl.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'show',
    start: "top center",
    end: "bottom -100%",
  }), 
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'is-active',
    start: "top center",
    end: "bottom -100%",
  })
})

gsap.to(".state__content", {
  scrollTrigger: {
    trigger: ".state__content",
    scrub: true,
    pin: true,
    start: "center center",
    end: "bottom -100%",
    toggleClass: "is-active",
    ease: "power2"
  },
});

gsap.to(".state__image img", {
  scrollTrigger: {
    trigger: ".state__content",
    scrub: 0.5,
    start: "top bottom",
    end: "bottom -300%",
    ease: "power2"
  },
  y: "-30%"
});

const showVideo = gsap.utils.toArray('.state__desc-wrapper')
showVideo.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'show',
    start: "top center",
    end: "bottom -100%",
  })
})


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