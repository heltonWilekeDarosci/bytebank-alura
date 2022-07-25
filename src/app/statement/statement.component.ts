import { TransferingService } from './../services/transfering.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  transfers: any[];

  constructor(private service: TransferingService) { }

  ngOnInit() {
    this.transfers = this.service.transfers;
  }

}
