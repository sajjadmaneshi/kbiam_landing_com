import './style.css'
import { setupAOS } from './aos.js'
import {setupSwiper} from "./swipper.js";
import feather from "feather-icons";




setupAOS()
setupSwiper();

feather.replace();

document.addEventListener("DOMContentLoaded", () => {
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
            link.classList.remove("text-yellow-500", "font-medium");
            link.classList.add("text-gray-600");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("text-yellow-500", "font-medium");
                link.classList.remove("text-gray-600");
            }
        });
    });
});
