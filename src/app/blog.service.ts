import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ForumPost } from './post.model';

@Injectable()
export class BlogService {

  blogPosts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.blogPosts = database.list('blogPosts');
  }

  getBlogPosts() {
    return this.blogPosts;
  }

  addBlogPost(newBlogPost: ForumPost) {
    this.blogPosts.push(newBlogPost);
  }

  // addComment(newComment: ForumPost) {
  //   this.comments.push(newComment);
  // }

  getBlogPostByKey(blogPostId: string) {
    return this.database.object('blogPosts' + blogPostId);
  }

  removeBlogPost(blogPostId) {
    this.database.object(`/blogPosts/${blogPostId}`).remove();
  }

  // updateComments(updatedPost) {
  //   let blogPostEntryInFirebase = this.getBlogPostByKey(updateBlogPost.$key);
  //   blogPostEntryInFirebase.update({ comments: updateBlogPost.comments, })
  //
  // }

}
