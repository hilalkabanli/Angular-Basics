import { Component } from "@angular/core";


@Component({
  selector: 'app-root',//selecter option is a custom tag name for our components
 // template: '<p>Hello World!</p>',//we cant use both template and url at the same time
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // styles: ['']



})
export class AppComponent{
  name = 'luis ramirez'
  imgUrl='https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'//property binding
  images= [ 
    'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
    'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0',
    'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'
  ]
  currentDate=new Date()
  cost = 2000
  temperature = 25.3
  pizza={
    topping: ['pepperoni','bacon'],
    size: 'large'
  }
  blueClass= false
  fontSize = 16
  getName(){
    return this.name;
  }
  changeImage(e: KeyboardEvent){
    this.imgUrl = (e.target as HTMLInputElement).value
  }
  logImg(event: string){
    console.log(event)
  }
}