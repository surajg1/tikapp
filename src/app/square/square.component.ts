import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styles: ['button { width: 90px; height: 90px; font-size: 2em !important; }; margin:0;']
})
export class SquareComponent{

  @Input() value: 'X' | 'O';

}
