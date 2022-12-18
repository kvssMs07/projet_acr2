import { Component, Input, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';
import { ListeComponent } from '../liste/liste.component';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  @Input() Id : Number;
  @Input() Nom :  String ;
  @Input() Description :  String ;
  @Input() Image : String[] ;
  @Input() Categorie : String ;

  count = 0;
  // todoList:any = [];

  constructor(private crudHttpService: CrudHttpService, public liste: ListeComponent){}

  ngOnInit(): void {
    this.liste.listTodos();
  }

  // listTodos(){
  //   this.crudHttpService.list().subscribe((response)=>{
  //     this.todoList = response;
  //   },(error=>{

  //   }));
  // }

  // createTodo(){
  //   let todo = {
  //     id: new Date().getTime(),
  //     title:`Some Todo` 
  //   }
  //   this.crudHttpService.create(todo).subscribe((response)=>{
  //     this.listTodos();
  //   },(error=>{

  //   }));
  // }

  editTodo(todo: any){
    let data = {
      Id: new Date().getTime(),
      Nom:`Un tattoo poly ` + this.count, 
      Description:'Description ' + this.count,
      Image:[
        'https://picsum.photos/300/300'
      ],
      Categorie:'Homme'
    }
    this.crudHttpService.update(todo.Id,data).subscribe((response)=>{
      this.liste.listTodos();
    },(error=>{

    }));
  }

  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.liste.listTodos();
    },(error=>{
    }));
  }

}
