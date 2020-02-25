import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.css']
})
export class PurePipeComponent implements OnInit {

  books: string[] = [];
  filter: string;

  constructor() { }

  ngOnInit() {
    this.books = [
      'Livro do Desassossego',
      'A educação dos filhos',
      'Antifrágil',
      'Metafísica'
    ]
  }

  addCourse(value){
    this.books.push(value);
  }

}
