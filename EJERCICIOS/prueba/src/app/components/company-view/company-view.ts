import { Component } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/companyService';
import { SucursalView } from "../sucursal-view/sucursal-view";

@Component({
  selector: 'company-view',
  imports: [SucursalView],
  templateUrl: './company-view.html',
  styleUrl: './company-view.css'
})
export class CompanyView {
  comapany?:Company;
  constructor(private service:CompanyService){}
  ngOnInit():void{
    this.comapany= this.service.getCompany();
  }
}
