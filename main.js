import './style.css'
import { setupAOS } from './src/aos.js'
import {setupSwiper} from "./src/swipper.js";
import { initRegisterForm } from "./src/formValidator.js";


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
            if(link.id!=='logo'){
                link.classList.remove("text-secondary", "font-medium");
                link.classList.add("text-white");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("text-secondary", "font-medium");
                    link.classList.remove("text-white");
                }
            }
        });
    });


    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    const closeMenu = () => {
        mobileMenu.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    };

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        document.body.classList.toggle("overflow-hidden");
    });

    // بستن منو با کلیک روی بک‌گراند
    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
        }
    });
    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});



