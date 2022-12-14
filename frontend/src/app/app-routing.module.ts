import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { BooksComponent } from './core/components/books/books.component';
import { StoreComponent } from './core/components/store/store.component';
// cSpell:disable

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'livros', component: BooksComponent },
  { path: 'loja', component: StoreComponent },
  { path: '', redirectTo: '/loja', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
