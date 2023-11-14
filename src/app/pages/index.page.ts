import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `

<div>
      <a routerLink='/'>
        Inicio
      </a>
      <a routerLink='/blog'>
        Blog
      </a>
    </div>
    
    <h2>Analog</h2>

    <h3>The fullstack meta-framework for Angular!</h3>


 
    <router-outlet />
 `,
})
export default class IndexPage {}
