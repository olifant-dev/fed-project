// Changing together multiple animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// "to"- where do I want the animation to go to
// "duration" - stands for how long it will take to appear in the middle of the screen
// "stagger" - stands for appearing elements one by one
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// after adding one more 'tl.to()' it will start after the previous one has finished
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// What "-=" means it tells the effect to start one second faster
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// It starts from something and goes to the second given value
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".text1", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".text2", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
tl.fromTo(".text3", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
tl.fromTo(".info", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");