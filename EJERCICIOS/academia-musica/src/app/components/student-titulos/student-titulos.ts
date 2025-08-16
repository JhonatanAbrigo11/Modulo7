import { Component, Input } from '@angular/core';
import { Student } from '../../models/Student';
import { StundentView } from '../stundent-view/stundent-view';
import { Course } from '../../models/Course';

@Component({
  selector: 'student-titulos',
  imports: [StundentView],
  templateUrl: './student-titulos.html',
  styleUrl: './student-titulos.css'
})
export class StudentTitulos {
  @Input() items?:Student[]
}
