import { Component, OnInit } from '@angular/core';
import {Post} from './post/post.model';

@Component({
  selector: 'bg-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;

  constructor() { }

  ngOnInit() {

    this.posts = [
      <Post>{
        title: 'Post 1',
        path: '/assets/posts/2017/04/27-first-post.md',
      },
      <Post>{
        title: 'Post 2',
        path: '/assets/posts/2017/04/27-second-post.md',
      }
    ];
  }

}
