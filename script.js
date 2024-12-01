// Hero Section Animations
gsap.from("#hero h1", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("#hero p", { duration: 1.5, delay: 0.3, y: 50, opacity: 0, ease: "power2.out" });

// About Section Animation
gsap.from("#about h2", { duration: 1, opacity: 0, y: 30, scrollTrigger: "#about" });
gsap.from("#about p", { duration: 1, opacity: 0, y: 30, delay: 0.2, scrollTrigger: "#about" });

// Gallery Images Animation
gsap.from("#gallery img", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.3,
  scrollTrigger: "#gallery",
});
