import { Component, Input } from '@angular/core';
import { Sucursal } from '../../models/Sucursal';
import { SucursalItem } from '../sucursal-item/sucursal-item';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-sucursal',
  imports: [SucursalItem],
  templateUrl: './sucursal-view.html',
  styleUrl: './sucursal-view.css'
})
export class SucursalView {
 @Input()items?:Sucursal[];
 @Input()item1?:Product;
}
