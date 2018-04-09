import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CommentService } from '../comment.service';
import { UserComment } from '../comment.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  providers: [CommentService]
})
export class AddCommentComponent implements OnInit {

      toggle: boolean = false;

      constructor(private commentService: CommentService) { }

      ngOnInit() {
      }

      toggleDisplay() {
        this.toggle = !this.toggle;
      }

      addComment(com: string) {
        const newComment: UserComment = new UserComment(com);

        this.commentService.addComment(newComment);
        this.toggleDisplay();
      }

    }
