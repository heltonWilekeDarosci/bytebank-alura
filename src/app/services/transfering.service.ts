import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferingService {
  private transferList = [];

  get transfers() {
    return this.transferList;
  }

  constructor() {
    this.transferList = [];
  }

  add(transfer: any) {
    this.hidrate(transfer);
    this.transferList.push(transfer);
  }

  private hidrate(transfer: any) {
    transfer.date = new Date();
  }
}
