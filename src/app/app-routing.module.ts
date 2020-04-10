import { NgModule }             from '@angular/core';
import { ArticlesComponent }   from './articles/articles.component';
import { ArticlesCreateComponent }   from './articles-create/articles-create.component';
import { ArticlesViewComponent }   from './articles-view/articles-view.component';
import { ArticlesEditComponent }   from './articles-edit/articles-edit.component';
import { UserCreateComponent }   from './user-create/user-create.component';
import { UserViewComponent }   from './user-view/user-view.component';
import { UserEditComponent }   from './user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';

// 2. Import the UserComponent
import { UsersComponent }   from './users/users.component';

// 3. Declare your routes
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/create', component: ArticlesCreateComponent },
  { path: 'articles/view/:id', component: ArticlesViewComponent },
  { path: 'articles/edit/:id', component: ArticlesEditComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}