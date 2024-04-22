import { Component } from '@angular/core';

@Component({
  selector: 'app-random-color-generator',
  templateUrl: './random-color-generator.component.html',
  styleUrls: ['./random-color-generator.component.css']
})
export class RandomColorGeneratorComponent {
  redColor = 0;
  greenColor = 0;
  blueColor = 0;
  colorGenerate = ""
  storeGenerateColor:any[] = []
  colorHistoryLength:number=0;
  createRandomColor(){
    const randomColorRed = Math.floor(Math.random()*255);
    const randomColorGreen = Math.floor(Math.random()*255);
    const randomColorBlue = Math.floor(Math.random()*255);
    this.redColor = randomColorRed;
    this.greenColor = randomColorGreen;
    this.blueColor = randomColorBlue;
    this.colorGenerate=`rgb(${randomColorRed},${randomColorGreen},${randomColorBlue})`

    this.addColorBox(randomColorRed,randomColorGreen,randomColorBlue);
  }
  addColorBox(red:number,green:number,blue:number){
   const boxObj = {
     id:Date.now(),
     code:`rgb(${red},${green},${blue})`,
     red:red, 
     green:green,
     blue:blue
    }
    this.storeGenerateColor.push(boxObj);
    this.colorHistoryLength=this.storeGenerateColor.length
  }
  removeColorBox(id:number){
    const a= this.storeGenerateColor.filter((obj:any)=>obj.id !==id)
    this.storeGenerateColor=a
  }
  copyColor(){
  }
  isSelected:boolean = false
  selectBox(){
   this.isSelected = true;
  }
  ngOnInit(){
    this.createRandomColor()
  }
}
