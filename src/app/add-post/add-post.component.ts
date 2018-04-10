import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ForumService } from '../post.service';
import { ForumPost } from '../post.model';
import { UserComment } from '../comment.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ForumService]

})
export class AddPostComponent implements OnInit {

    toggle: boolean = false;

    constructor(private forumService: ForumService) { }

    ngOnInit() {
    }

    toggleDisplay() {
      this.toggle = !this.toggle;
    }

    addPost(title: string, owner: string, body: string) {
      const newPost: ForumPost = new ForumPost(title, owner, body);
      const newComment: UserComment = new UserComment("");
      newPost.comments = [newComment];
      this.forumService.addPost(newPost);
      this.toggleDisplay();
    }

  }
