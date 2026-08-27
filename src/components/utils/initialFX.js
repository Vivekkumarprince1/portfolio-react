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
    ".hero-avatar-container",
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
  );

  tl.fromTo(
    [".hero-greeting", ".hero-name", ".hero-title", ".hero-description"],
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
    "-=0.8"
  );

  tl.fromTo(
    ".hero-ctas",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    "-=0.4"
  );

  tl.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1, ease: "power1.inOut" },
    "-=1"
  );
}

