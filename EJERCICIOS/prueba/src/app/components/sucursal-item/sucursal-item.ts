import { Component, Input } from '@angular/core';
import { Sucursal } from '../../models/Sucursal';
import { Product } from '../../models/Product';

@Component({
  selector: 'tr[app-sucursalItem]',
  imports: [],
  templateUrl: './sucursal-item.html',
  styleUrl: './sucursal-item.css'
})
export class SucursalItem {
  @Input()item?:Sucursal;
  
}
