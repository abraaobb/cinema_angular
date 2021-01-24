import { Component, OnInit } from '@angular/core';
import { IngressoModel } from './ingresso.model';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.scss'],
})
export class IngressoComponent implements OnInit {
  ingresso: IngressoModel = new IngressoModel();

  filmes = ['Clube de Luta', 'Titanic', 'Teoria de Tudo'];

  constructor() {}

  ngOnInit(): void {}

  comprar(event: any) {
    console.log('Evento: ' + event);
    console.log('Ingresso: ' + this.ingresso);

    alert('Compra realizada com sucesso!');

    alert('Filme selecionado: ' + this.ingresso.filme);
  }
}
