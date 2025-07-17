import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoivceItem';

@Component({
  selector: 'tr[invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
})
export class InvoiceItemComponent {
  @Input() item!:InvoiceItem
}
