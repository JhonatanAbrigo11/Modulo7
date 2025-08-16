import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api';//URL base del backend
  constructor(private http: HttpClient) { }
  getInvoice(): Observable<Course> {
    console.log('CourseService: solicitando datos del backend...');
    return this.http.get<Course>(`${this.apiUrl}/invoice`);
  }

  checkBackendHealth(): Observable<any> {
    console.log('CourseService: verificando salud del backend...');
    return this.http.get(`${this.apiUrl}/health`);
  }


}