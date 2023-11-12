import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  template: `
    <div>
      <a routerLink="/index" >
        Inicio
      </a>
      <a routerLink="/posts" >
        Blog
      </a>
      <a routerLink="/contact" >
      Contacto
      </a>
    </div>

    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.angular:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {

}
