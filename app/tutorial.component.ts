import {Component} from '@angular/core';
// binding class or syte cho element
@Component({
    selector: 'my-tutorial',
    template: `
    <h2>{{ title }}</h2>
    <p [ngClass]="{classOne: cone , classTwo: ctwo } ">This is ng Class</p>
    <button (click)="toggle()">Toggle</button>
    
  <p [ngStyle]="{color: style ,background: style2 }">This is paragaph will be apply to ngStyle </p>
    `,
    styles: [
        `
            .classOne {
           color: red;
           }
           .classTwo {
           color: blue;
           }
        `
    ]
})
export class TutorialComponent {
    public title = " Hello Angular Js 2 ";
    public cone: boolean = true;
    public ctwo:boolean = false;
    toggle(){
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }

    public style2 = 'blue';
    public style = 'red';
}
