import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment.development";// we can detect if we are in production or development by using environment files in our project.


//  enableProdMode(); // <-- here



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))