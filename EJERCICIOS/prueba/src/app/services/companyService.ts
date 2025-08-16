import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class companyService {
  private apiUrl = 'http://localhost:3000/api';//URL base del backend
  constructor(private http: HttpClient) { }
  getCompany(): Observable<Company> {
    console.log('CompanyService: solicitando datos del backend...');
    return this.http.get<Company>(`${this.apiUrl}/invoice`);
  }

  checkBackendHealth(): Observable<any> {
    console.log('CompanyService: verificando salud del backend...');
    return this.http.get(`${this.apiUrl}/health`);
  }


}

