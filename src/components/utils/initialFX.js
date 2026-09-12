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
      ".hero-horizon-ribbon",
      ".hero-discipline-pill",
      ".hero-display-title",
      ".hero-kinetic-cycler",
      ".telemetry-glass-console",
      ".hero-bottom-deck",
      ".hero-scroll-beacon"
    ],
    { y: 24, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
    "-=0.5"
  );
}

