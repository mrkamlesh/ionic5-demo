import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(m => m.HomePageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone.module').then(m => m.PhonePageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then(m => m.MusicPageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('./colors/colors.module').then(m => m.ColorsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
