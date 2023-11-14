import { AsyncPipe, NgFor } from '@angular/common';
import { injectContent, injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Post } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  template: `
    <h1>Lista de posts</h1>

    <p>Introducion</p>
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]">{{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class IndexPage {
    posts = injectContentFiles<Post>();
}
