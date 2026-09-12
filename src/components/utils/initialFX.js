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

  tl.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 0.8, ease: "power2.out" }
  );

  tl.fromTo(
    [
      ".hero-status-ribbon",
      ".hero-badge-architect",
      ".hero-main-title",
      ".hero-lead-narrative",
      ".hero-specialization-tags",
      ".hero-action-row",
      ".hero-metrics-strip"
    ],
    { y: 25, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
    "-=0.5"
  );

  tl.fromTo(
    ".hero-card-stage",
    { scale: 0.92, opacity: 0, y: 30 },
    { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    "-=0.7"
  );
}

