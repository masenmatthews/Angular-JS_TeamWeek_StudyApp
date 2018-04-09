import { ChatComponent } from './chat/chat.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


export const appRoutes: Routes = [
  {
    path: "createUser",
    component: CreateUserComponent
  }
]
