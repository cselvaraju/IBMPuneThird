import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
import { Post } from '../../services/posts.service';

import { UserService } from '../../services/user.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UsersandpostsComponent implements OnInit {

  userList: User[];
  posts: Post[];
  // userService: UserService;

  constructor(private userService: UserService,
    private postsService: PostsService) {
    // this.userService = userService;
  }

  ngOnInit() {
    this.userList = this.userService.getUsers();
    this.posts = this.postsService.getPosts();
  }

}
