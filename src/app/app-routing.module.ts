import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [

  { path: '',           redirectTo: '/login',      pathMatch: 'full' },
  { path: 'login',      component :  LoginComponent                  },
  { path: 'register',   component :  RegisterComponent               },
  { path: 'perfil',     component : PerfilComponent },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
    
  },
  {
    path: 'coversor',
    loadChildren: () => import('./pages/coversor/coversor.module').then( m => m.CoversorPageModule)
    
  },
  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: '**',
    redirectTo: 'page404'
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
