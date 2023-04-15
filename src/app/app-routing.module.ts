import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'listing', loadChildren: () => import('./pages/listing/listing.module').then(m => m.ListingModule) },
  { path: 'my-account', loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'add-edit-listing', loadChildren: () => import('./pages/add-edit-listing/add-edit-listing.module').then(m => m.AddEditListingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
