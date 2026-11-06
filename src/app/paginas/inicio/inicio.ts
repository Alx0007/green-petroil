import { Component } from '@angular/core';
import { Chamada } from '../../componentes/chamada/chamada';
import { CardPost } from '../../componentes/card-post/card-post';

@Component({
  imports: [Chamada, CardPost],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {}