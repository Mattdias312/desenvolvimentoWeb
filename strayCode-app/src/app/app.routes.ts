import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LoginComponent } from './login/login.component';
import { autorizacaoGuard } from './guard/guard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent, canActivate: [autorizacaoGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: HomeComponent}
];
