import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-component.component.html',
  styleUrl: './match-component.component.css'
})
export class MatchComponentComponent {
  @Input() data:any
}
