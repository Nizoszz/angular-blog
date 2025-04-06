import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-section',
  imports: [CommonModule],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css',
})
export class CategorySectionComponent {
  categories = [
    { name: 'AI & Machine Learning', count: 24 },
    { name: 'Web Development', count: 18 },
    { name: 'Cybersecurity', count: 16 },
    { name: 'Mobile', count: 15 },
    { name: 'Cloud Computing', count: 13 },
    { name: 'Hardware', count: 11 },
    { name: 'Software', count: 9 },
    { name: 'Gaming', count: 8 },
  ];
}
