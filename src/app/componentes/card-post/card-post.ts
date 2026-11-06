import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-post',
  imports: [RouterLink],
  templateUrl: './card-post.html',
  styleUrl: './card-post.css'
})
export class CardPost {
  numero = input('');
  imagem = input('');
  alt = input('');
  categoria = input('');
  data = input('');
  titulo = input('');
  resumo = input('');
}