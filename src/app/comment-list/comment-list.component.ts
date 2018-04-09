import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentService]
})
export class CommentListComponent implements OnInit {

      comments: FirebaseListObservable<any[]>;
      currentRoute: string = this.route.url;

      constructor(private commentService: CommentService, private route: Router) { }

      ngOnInit() {
        this.comments = this.commentService.getComments();
      }

    }
