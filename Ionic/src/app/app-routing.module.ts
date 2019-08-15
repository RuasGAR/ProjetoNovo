import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
 },
 { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
 { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},
 { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule'},
 { path: 'post', loadChildren: './post/post.module#PostPageModule' },
 { path: 'newpost', loadChildren: './newpost/newpost.module#NewpostPageModule' },
 { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
 { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
 { path: 'bemvindo', loadChildren: './bemvindo/bemvindo.module#BemvindoPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
