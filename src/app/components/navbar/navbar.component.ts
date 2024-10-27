import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isMenuOpen = false;
    isDarkTheme: boolean = false;

    constructor(private renderer: Renderer2,private themeService: ThemeService) {
      this.themeService.darkMode$.subscribe((isDarkMode) => {
        this.isDarkTheme = isDarkMode;
      });
    }
  
    toggleTheme() {
      this.themeService.toggleDarkMode();
    }


    // Bascule l'état du menu
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    // Naviguer vers une section et fermer le menu
    navigateTo(section: string) {
        this.isMenuOpen = false; // Fermer le menu
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Défilement en douceur
        }
    }

   
}
