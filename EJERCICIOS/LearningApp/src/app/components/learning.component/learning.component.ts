import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course';
import { CourseView } from "../course-view/course-view";
import { LearningTable } from "../learning-table/learning-table";

@Component({
  selector: 'app-learning',
  imports: [CourseView, LearningTable],
  templateUrl: './learning.component.html',

})
export class LearningComponent  implements OnInit{
  course!:Course;
  constructor(private service:CourseService){}
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }

}
