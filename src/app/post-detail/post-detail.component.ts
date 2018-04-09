import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ForumService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [ForumService]
})
export class PostDetailComponent implements OnInit {

    postKey: string;
    postDetail;

    constructor(private route: ActivatedRoute, private location: Location, private forumService: ForumService) { }

    ngOnInit() {
      this.route.params.forEach((urlParameters)=> {
        this.postKey = urlParameters['id'];
      });
      this.postDetail = this.forumService.getPostById(this.postKey);
    }

  }
