import { Component, Input } from '@angular/core';
import { Student } from '../../models/Student';
import { Course } from '../../models/Course';

@Component({
  selector: 'tr[learning-item]',
  imports: [],
  templateUrl: './learning-item.html',

})
export class LearningItemComponet {
  @Input() item!:Student
}
