document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".right-now__nav-item[data-tab]");
  const contents = document.querySelectorAll(".right-now__content-item");
  const blockTitle = document.querySelector(".right-now__block-title");
  const blockText = document.querySelector(".right-now__block-text");

  // Block right-now navigation (swiper)
  const descriptions = {
    team: {
      title: "Team",
      text: "Jit brings together IT talents and directs their vast expertise in technologies, industries, and technological domains to the benefit of customers.",
    },
    growth: {
      title: "Internal Growth",
      text: "We provide opportunities for continuous learning and professional development, encouraging career advancement within the company.",
    },
    transparent: {
      title: "Transparent",
      text: "Our company values openness and honesty in all business interactions, fostering trust and collaboration within our team.",
    },
    experienced: {
      title: "Experienced",
      text: "Our company values openness and honesty in all business interactions, fostering trust and collaboration within our team.",
    },
    result: {
      title: "Result-oriented",
      text: "Our company values openness and honesty in all business interactions, fostering trust and collaboration within our team.",
    },
    flexible: {
      title: "Flexible",
      text: "Our company values openness and honesty in all business interactions, fostering trust and collaboration within our team.",
    },
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab");

      if (!tabName) return;
      tabs.forEach((t) =>
        t
          .querySelector(".right-now__text")
          ?.classList.remove("right-now__text-active")
      );
      contents.forEach((c) => c.classList.remove("active"));

      tab
        .querySelector(".right-now__text")
        .classList.add("right-now__text-active");
      const activeContent = document.getElementById(tabName);

      if (activeContent) {
        activeContent.classList.add("active");
      }

      if (descriptions[tabName]) {
        blockTitle.textContent = descriptions[tabName].title;
        blockText.textContent = descriptions[tabName].text;
      }
    });
  });
});
