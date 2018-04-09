import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ForumService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [ForumService]
})
export class PostListComponent implements OnInit {

    posts: FirebaseListObservable<any[]>;
    currentRoute: string = this.route.url;

    constructor(private forumService: ForumService, private route: Router) { }

    ngOnInit() {
      this.posts = this.forumService.getPosts();
    }

    details(post) {
      this.route.navigate(['posts', post.$key]);
    }

  }
