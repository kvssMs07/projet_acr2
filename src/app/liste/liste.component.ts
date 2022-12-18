import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/projet.json';
import { CrudHttpService } from '../crud-http.service';
 
interface Projet {
  Id: Number;
  Nom: String;
  Description:String;
  Image: String[];
  Categorie: String;
  }

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  todoList:any = [];
  count = 1 ;

  constructor(private crudHttpService: CrudHttpService){}

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  createProjet(){
    let todo = {
      Id: new Date().getTime(),
      Nom:'Un tattoo poly ' + this.count, 
      Description:'Description ' + this.count,
      Image:[
        'https://picsum.photos/250/300'
      ],
      Categorie:'Homme'
    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  Tableau : Projet[] = data;

}
