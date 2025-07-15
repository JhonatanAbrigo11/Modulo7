import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Product } from './components/product/product';

@Component({
  selector: 'root',
  imports: [RouterOutlet, User, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title:string =('ejemplo1');
  author:string = 'Jhonatan Abrigo';
}
