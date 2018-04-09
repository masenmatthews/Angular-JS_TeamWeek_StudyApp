import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Welcome
import { WelcomeComponent } from './welcome/welcome.component';


//forum
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';



//Admin
// import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
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
  // },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }

  // {
  //   path: '',
  //   component: Component
  // }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
