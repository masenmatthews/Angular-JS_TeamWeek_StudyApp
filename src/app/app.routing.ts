import { ChatComponent } from './chat/chat.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders }  from '@angular/core';



export const appRoutes: Routes = [
  {
    path: "createUser",
    component: CreateUserComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
