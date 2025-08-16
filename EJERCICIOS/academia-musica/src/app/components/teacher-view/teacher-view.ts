import { Component, Input } from '@angular/core';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'teacher-view',
  imports: [],
  templateUrl: './teacher-view.html',
  styleUrl: './teacher-view.css'
})
export class TeacherView {
  @Input()teacher?:Teacher;
}
