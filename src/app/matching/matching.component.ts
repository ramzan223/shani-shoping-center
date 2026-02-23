import { Component } from '@angular/core';

@Component({
  selector: 'app-matching',
  standalone: false,
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.scss'
})
export class MatchingComponent {
scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
