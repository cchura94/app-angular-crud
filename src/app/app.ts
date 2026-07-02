import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { Producto } from './producto/producto';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto, Blog, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-angular-crud');
}
