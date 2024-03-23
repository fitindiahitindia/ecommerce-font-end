import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todo:ProductService){}
  notes:any=[]
  refreshNotes(){
    this.todo.getNotes().subscribe((res)=>{
      this.notes = res
    })
  }
  addNotes(newNotes:string){
    this.todo.addNote(newNotes).then((res)=>{
      console.log(res);
      this.refreshNotes();
    })
  }
  deleteNotes(id:string){
    this.todo.deleteNote(id).then((res)=>{
      console.log(res);
      this.refreshNotes();
    })
  }
  ngOnInit(){
   this.refreshNotes();
  }
}
