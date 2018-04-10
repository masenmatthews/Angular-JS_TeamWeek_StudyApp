import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ForumPost } from './post.model';


@Injectable()
export class ForumService {

  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  addPost(newPost: ForumPost) {
    this.posts.push(newPost);
  }

  // addComment(newComment: ForumPost) {
  //   this.comments.push(newComment);
  // }

  getPostByKey(postId: string) {
    return this.database.object('posts/' + postId);
  }

  removePost(postId) {
    this.database.object(`/posts/${postId}`).remove();
  }

  updateComments(updatedPost) {
    let postEntryInFirebase = this.getPostByKey(updatedPost.$key);
    postEntryInFirebase.update({ comments: updatedPost.comments, })

  }

}
