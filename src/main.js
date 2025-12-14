import '../style.css'
import { setupAOS } from './aos.js'
import {setupSwiper} from "./swipper.js";
import { initRegisterForm } from "./formValidator.js";


import feather from "feather-icons";



setupAOS()
setupSwiper();

feather.replace();



document.addEventListener("DOMContentLoaded", () => {

    initRegisterForm();

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // adjust for navbar height
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("text-secondary", "font-medium");
            link.classList.add("text-white");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("text-secondary", "font-medium");
                link.classList.remove("text-white");
            }
        });
    });
});



