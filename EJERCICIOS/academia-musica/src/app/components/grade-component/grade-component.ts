import { Component, OnInit } from '@angular/core';

import { Course } from '../../models/Course';
import { StundentView } from '../stundent-view/stundent-view';
import { TeacherView } from '../teacher-view/teacher-view';
import { CourseService } from '../../services/course';
import { ClassComponent } from "../class-component/class-component";
import { StudentTitulos } from "../student-titulos/student-titulos";

@Component({
  selector: 'grade-component',
  standalone: true,
  imports: [TeacherView, ClassComponent, StudentTitulos],
  templateUrl: './grade-component.html',
  styleUrls: ['./grade-component.css']
})
export class GradeComponent implements OnInit {
  course?: Course;

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: Course) => {
        this.course = data;
        console.log('Datos recibidos del backend:', data);
      
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en puerto 3000');

      }
    );
  }
}