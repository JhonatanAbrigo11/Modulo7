import { Injectable, OnInit } from '@angular/core';


import { companyData } from '../data/companyData';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService  {
  private company:Company= companyData;
  getCompany():Company {
    return this.company;
  }
}
