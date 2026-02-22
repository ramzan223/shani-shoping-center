import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'knightone';
  constructor(private el: ElementRef) { }

  scrollToSection(sectionId: string) {
    const element = this.el.nativeElement.querySelector('#' + sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

    isMenuOpen: boolean = false;

  // Function to toggle menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
