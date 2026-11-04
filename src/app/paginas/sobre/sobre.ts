import { Component } from '@angular/core';
import { Chamada } from '../../componentes/chamada/chamada';

@Component({
  imports: [Chamada],
  selector: 'app-sobre',
  styleUrl: './sobre.css',
  templateUrl: './sobre.html',
})
export class Sobre {}
