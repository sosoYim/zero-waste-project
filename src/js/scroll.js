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

<<<<<<< HEAD
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {
    x: x,
    y: y,
    autoAlpha: 0
  }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}
=======
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
>>>>>>> 077234117d306984f1475f9775bd81a97ac92351

function hide(elem) {
  gsap.set(elem, {
    autoAlpha: 0
  });
}

gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
  hide(elem); // assure that the element is hidden when scrolled into view

  ScrollTrigger.create({
    trigger: elem,
    onEnter: function () {
      animateFrom(elem)
    },
    onEnterBack: function () {
      animateFrom(elem, -1)
    },
    onLeave: function () {
      hide(elem)
    } // assure that the element is hidden when scrolled into view
  });
});
