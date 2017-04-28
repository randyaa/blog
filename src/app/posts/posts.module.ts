import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'angular2-markdown';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    MaterialModule,
  ],
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  exports: [
    PostsComponent,
  ],
})
export class PostsModule { }
