import { Component } from '@angular/core';

@Component({
  moduleId  :module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles:['h1{ color: olivedrab; font-weight: bold}']
})
export class AppComponent  { name = 'Angular'; }
