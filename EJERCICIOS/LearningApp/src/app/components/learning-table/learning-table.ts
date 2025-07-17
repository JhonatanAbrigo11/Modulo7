import { Component, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { Student } from '../../models/Student';
import { LearningItemComponet } from '../learning-item/learning-item';

@Component({
  selector: 'learning-table',
  imports: [LearningItemComponet],
  templateUrl: './learning-table.html',

})
export class LearningTable {
  @Input() items!:Student[]
}
