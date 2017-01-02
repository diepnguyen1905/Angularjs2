import {Component} from '@angular/core';
// binding class or syte cho element
@Component({
    selector:'my-tutorial',
    template:`
    <h2>{{ title }}</h2>
    <input type="text" [(ngModel)]="fName" />
    <input type="text" [(ngModel)]="lName"/>
    <br>
    <p> FullName : {{ fName }} {{ lName }}</p>
    `
})
export class TutorialComponent{
    public title = " Hello Angular Js 2 ";

}
