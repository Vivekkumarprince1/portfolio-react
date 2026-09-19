import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.1,
  });

  // Timeline for the hero elements stagger
  const tl = gsap.timeline();

  // Animate hero portrait and backdrop
  const portraitEl = document.querySelector(".hero-portrait-stage, .hero-avatar-container");
  if (portraitEl) {
    tl.fromTo(
      portraitEl,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.1, ease: "power3.out" }
    );
  }

  // Animate backdrop typography & badges
  const stageAtmosphere = [
    ".hero-backdrop-typography",
    ".hero-status-bar",
    ".hero-badge-left",
    ".hero-badge-right"
  ].filter((s) => document.querySelector(s));

  if (stageAtmosphere.length > 0) {
    tl.fromTo(
      stageAtmosphere,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.7"
    );
  }

  // Animate editorial text and actions
  const editorialEls = [
    ".hero-heading-wrap",
    ".hero-name",
    ".hero-summary-text",
    ".hero-description",
    ".hero-actions",
    ".hero-ctas"
  ].filter((s) => document.querySelector(s));

  if (editorialEls.length > 0) {
    tl.fromTo(
      editorialEls,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" },
      "-=0.6"
    );
  }

  // Animate chrome elements (header, floating icons)
  const chromeEls = [".header", ".icons-section", ".nav-fade"].filter((s) =>
    document.querySelector(s)
  );

  if (chromeEls.length > 0) {
    tl.fromTo(
      chromeEls,
      { opacity: 0 },
      { opacity: 1, duration: 0.9, ease: "power1.inOut" },
      "-=0.8"
    );
  }
}

