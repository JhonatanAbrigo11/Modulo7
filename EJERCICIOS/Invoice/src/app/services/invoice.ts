import { Injectable } from '@angular/core';
import { invoiceData } from '../data/Invoice.data';
import { Invoice } from '../model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice:Invoice=invoiceData;

  getInvoice():Invoice{
    return this.invoice;
  }
  
}
