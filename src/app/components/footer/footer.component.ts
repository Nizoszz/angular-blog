import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}
  currentYear = new Date().getFullYear();
  linkedin = 'https://www.linkedin.com/in/andrewairamdasilva';
  github = 'https://github.com/nizoszz';
  instagram = 'https://instagram.com/nizos_';
  goToRedirect(value: string): void {
    window.open(value, '_blank');
    console.log(value);
  }
}
