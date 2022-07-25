import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() atTransfering = new EventEmitter<any>();

  value: number;
  destination: number;

  constructor() { }

  transfer() {
    this.atTransfering.emit({value: this.value, destination: this.destination});

    this.clearCells();
  }

  clearCells() {
    this.value = null;
    this.destination = null;
  }

  ngOnInit(): void {
  }
}
