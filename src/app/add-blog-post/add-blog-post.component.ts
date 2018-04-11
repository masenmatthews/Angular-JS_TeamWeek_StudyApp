import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { BlogService } from '../blog.service';
import { ForumPost } from '../post.model';
import { UserComment } from '../comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog-post',
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css'],
  providers: [BlogService]

})
export class AddBlogPostComponent implements OnInit {

    toggle: boolean = false;

    blogPosts: FirebaseListObservable<any[]>;

    constructor(private blogService: BlogService) { }

    ngOnInit() {
      this.blogPosts = this.blogService.getBlogPosts();
    }

    toggleDisplay() {
      this.toggle = !this.toggle;
    }

    // details(blogPost) {
    //   this.route.navigate(['blog', blogPost.$key]);
    // }

    addBlogPost(title: string, owner: string, body: string) {
      const newBlogPost: ForumPost = new ForumPost(title, owner, body);
      // const newComment: UserComment = new UserComment("");
      // newBlogPost.comments = [newComment];
      this.blogService.addBlogPost(newBlogPost);
      this.toggleDisplay();
    }
  }
