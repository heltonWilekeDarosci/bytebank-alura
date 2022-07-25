import { TransferingService } from './services/transfering.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferingService ) {

  }

  transfering($event) {
    this.service.add($event);
  }
}
