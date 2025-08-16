import { Component, OnInit } from '@angular/core';
import { SucursalView } from '../sucursal-view/sucursal-view';
import { Company } from '../../models/company';
import { companyService } from '../../services/companyService';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [SucursalView],
  templateUrl: './company-view.html',
  styleUrls: ['./company-view.css']
})
export default class CompanyView implements OnInit {
  comapany?: Company;

  constructor(private service: companyService) { }

  ngOnInit(): void {
    this.service.getCompany().subscribe(
      (data: Company) => {
        this.comapany = data;
        console.log('Datos recibidos del backend:', this.comapany);

      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en puerto 3000');

      }
    );
  }
}








export { CompanyView };

