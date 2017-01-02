import {Component} from '@angular/core';
// binding class or syte cho element
@Component({
    selector:'my-tutorial',
    template:`
    <h2>{{ title }}</h2>
    <h3 *ngIf="showLineIf"> This is ngIf Directive </h3>
    <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">this is line red</div>
        <div *ngSwitchCase="'blue'">this is line blue</div>
        <div *ngSwitchCase="'green'">this is line green</div>
        <div *ngSwitchCase="'black'">this is line black</div>
    </div>
    <ul>
    <li *ngFor="let color of colors ">{{ color }}</li>
    </ul>
    `
})
export class TutorialComponent{
    public title = " Hello Angular Js 2 ";
    public showLineIf = false;
    public color = 'red';
    public colors: string[] =  ["red" , "green","blue"];

}
