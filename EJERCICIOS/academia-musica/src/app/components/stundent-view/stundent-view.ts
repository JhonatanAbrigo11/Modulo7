import { Component, Input } from '@angular/core';
import { Student } from '../../models/Student';

@Component({
  selector: 'tr[student-view]',
  imports: [],
  templateUrl: './stundent-view.html',
  styleUrl: './stundent-view.css'
})
export class StundentView {
@Input()student?:Student  

}
