import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogService } from '../blog.service';
import { ForumPost } from '../post.model';

@Component({
  selector: 'app-remove-blog-post',
  templateUrl: './remove-blog-post.component.html',
  styleUrls: ['./remove-blog-post.component.css'],
  providers: [BlogService]
})
export class RemoveBlogPostComponent implements OnInit {

    @Input() blogPostKey: string;

    constructor(private blogService: BlogService) { }

    ngOnInit() {
    }

    removeBlogPost(blogPost) {
      this.blogService.removeBlogPost(blogPost.$key);
    }

  }
