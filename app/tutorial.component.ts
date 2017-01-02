import {Component} from '@angular/core';
// binding class or syte cho element
@Component({
    selector:'my-tutorial',
    template:`
    <h2>{{ title }}</h2>
    <button (click)="clickme($event)"> list event Mouse </button>
    <!-- lấy giá trị của thẻ input-->
    <button (click)="clickme(name.value)"> Click Me </button>
    <input type="text" #name/>
    `
})
export class TutorialComponent{
    public title = " Hello Angular Js 2 ";
    clickme(value){
        console.log( value);
    }
}
