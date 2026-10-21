import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Post } from './paginas/post/post';
import { Sobre } from './paginas/sobre/sobre';
import { Projetos } from './paginas/projetos/projetos';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'post/:id', component: Post },
  { path: 'sobre', component: Sobre },
  { path: 'projetos', component: Projetos },
  { path: '**', redirectTo: '' }
];