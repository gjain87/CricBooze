import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matchcard',
  standalone: true,
  imports: [],
  templateUrl: './matchcard.component.html',
  styleUrl: './matchcard.component.css'
})
export class MatchcardComponent {
  @Input() match:any

}
