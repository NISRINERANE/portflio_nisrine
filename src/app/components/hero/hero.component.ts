import { Component, HostListener, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

declare var Typed: any; // Pour l'animation de texte Typed.js

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  ngOnInit(): void {
    this.initScrollReveal();
    this.initTypedText();
  }

  // Initialiser Typed.js
  initTypedText() {
    new Typed('.typedText', {
      strings: ["Full Stack Developer.", "Software Engineer."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });
  }

  // Initialiser ScrollReveal pour l'animation au défilement
  initScrollReveal() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
  }

  // Changer l'ombre de la barre de navigation au défilement
  /*@HostListener('window:scroll', [])
  headerShadow() {
    const navHeader = document.getElementById("header");
    if (window.scrollY > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
    }
  }

  // Fonction pour activer le menu
  myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }*/
}
