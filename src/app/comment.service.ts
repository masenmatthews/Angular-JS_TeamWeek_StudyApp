import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserComment } from './comment.model';


@Injectable()
export class CommentService {

  comments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.comments = database.list('posts');
  }

  getComments() {
    return this.comments;
  }

  addComment(newComment: UserComment) {
    this.comments.push(newComment);
  }

  // addComment(newComment: ForumPost) {
  //   this.comments.push(newComment);
  // }

  getCommentByKey(commentId: string) {
    return this.database.object('comments/' + commentId);
  }
  //
  // removePost(postId) {
  //   this.database.object(`/posts/${postId}`).remove();
  // }



}
