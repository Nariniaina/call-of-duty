// GSAP ANIMATION. SHOW FADE IN ON SCREEN VIEW=
gsap.from(".nav-item", {opacity: 0, duration: 0.6, delay: 1.2, y: 30, stagger: 0.2})
gsap.from(".service", {opacity: 0.1, duration: 1, delay: 2, y: 30, stagger: 0.3})
gsap.from(".banner", {opacity: 0.2, duration: 0.6, delay: 6, x: -200})
gsap.from(".notice", {opacity: 0, duration: 1, delay: 4.5, x: -200})
gsap.from(".icons span", {opacity: 0, duration: 1, delay: 4, y: -30, stagger: 0.5})