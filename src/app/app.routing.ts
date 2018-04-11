
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component'
// Welcome
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component'

//forum
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { BlogComponent } from './blog/blog.component';


import { AuthGuardService } from './auth-guard.service'
//Admin
// import { AdminComponent } from './admin/admin.component';

export const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
      //  canActivate: [AuthGuardService]
  // },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'createUser',
    component: CreateUserComponent
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'chat/:id',
    component: ChatDetailComponent,
    canActivate: [AuthGuardService]
  }

  // {
  //   path: '',
  //   component: CommentComponent
  // }
 ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
