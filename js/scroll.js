const introductionElements = [
  {
    class: ".introduction__title",
    delay: 0,
  },
  {
    class: ".introduction__info",
    delay: 0.2,
  },
  {
    class: ".nav__list",
    delay: 0.4,
  },
  {
    class: ".introduction__text",
    delay: 0.2,
  },
  {
    class: ".introduction__window-1",
    delay: 0.4,
  },
  {
    class: ".introduction__window-2",
    delay: 0.5,
  },
  {
    class: ".introduction__background",
    delay: 0.5,
  },
  {
    class: ".introduction__modal",
    delay: 0.5,
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Animation block Introduction
  introductionElements.forEach((item) => {
    gsap.from(item.class, {
      scrollTrigger: {
        trigger: ".introduction",
        scrub: false,
        start: "top bottom",
        once: true,
        // markers: true,
      },
      opacity: 0,
      ease: "none",
      duration: 1,
      delay: 1 + item.delay,
      filter: "blur(15px)",
      marginTop: 100,
    });
  });

  // Scroll through links
  let links = gsap.utils.toArray("nav a");
  links.forEach((a) => {
    let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      end: "bottom center",
    });
    a.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: linkST.start,
        overwrite: "auto",
      });
    });
  });
});
