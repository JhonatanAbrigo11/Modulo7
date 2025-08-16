import { Component, Input } from '@angular/core';
import { Class } from '../../models/Class';

@Component({
  selector: 'class-component',
  imports: [],
  templateUrl: './class-component.html',
  styleUrl: './class-component.css'
})
export class ClassComponent {
  @Input() class?:Class;
}
