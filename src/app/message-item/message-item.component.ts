import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input()
  message !: {author : string, content : string; date : Date}
}
