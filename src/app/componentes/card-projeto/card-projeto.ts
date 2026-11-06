import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  imports: [],
  templateUrl: './card-projeto.html',
  styleUrl: './card-projeto.css'
})
export class CardProjeto {
  categoria = input('');
  nome = input('');
  descricao = input('');
  local = input('');
  impacto = input('');
}