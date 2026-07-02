import { Component, inject, signal } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  blogService = inject(BlogService);
  publicaciones = signal<any[]>([]);
  cargando = signal(true)


  constructor(){
    this.funListarPublicaciones()
  }
  
  funListarPublicaciones(){
    this.cargando.set(true);

    this.blogService.funObtenerArticulos().subscribe(
      (data: any) => {  

      },
      (error: any) => {  

      }
    );
    
    this.blogService.funObtenerArticulos().subscribe({
      next: (data: any) => {
        this.publicaciones.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.log('Error al recuperar las publicaciones', err)
      }
    });
    
  }
}
