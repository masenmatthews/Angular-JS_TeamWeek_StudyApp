import { Component, OnInit, Input } from '@angular/core';

import { ForumService } from '../post.service';

@Component({
  selector: 'app-remove-post',
  templateUrl: './remove-post.component.html',
  styleUrls: ['./remove-post.component.css'],
  providers: [ForumService]
})
export class RemovePostComponent implements OnInit {

    @Input() postKey: string;

    constructor(private forumService: ForumService) { }

    ngOnInit() {
    }

    removePost(post) {
      this.forumService.removePost(post.$key);
    }

  }
