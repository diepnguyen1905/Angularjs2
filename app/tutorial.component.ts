import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: '<h1>First Component</h1>' +
    '<h2>Second Component</h2><br>'+
    '<h4>{{ title }}</h4>'+
    '<p>{{ description }}</p> ' +
    '<img [src]="image"> <br>' +
    '<input type="text" [value]="valueText">'
    ,
    // sử dựng sytles cho từng component
    styles:['h1{color: red }' , 'h2{ color: blue}']
})
export class TutorialComponent {
    public title = "Đây là bài đầu tiên của angular js";
    public description = "lần đầu tiên làm việc với angular js ";
    public image = 'http://lorempixel.com/400/400';
    public valueText = "Wellcome Angulajs 2 ";

}
