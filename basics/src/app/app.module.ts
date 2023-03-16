import {NgModule} from "@angular/core"; //NgModule decarator is a function for adding metadata to a class
//By default, angular doesnt assume the environment our application is running in , we need to import a module called browser module.
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PostComponent//the app component is considered the root component of our app, the root component is responsible for loading other components
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule{//Since this module is being imported into another file, we will export a class called out module

}