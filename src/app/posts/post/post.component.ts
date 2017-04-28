import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'bg-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
