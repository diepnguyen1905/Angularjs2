import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: '<h1>First Component</h1>' +
    '<h2>Second Component</h2>'
    ,
    // sử dựng sytles cho từng component
    styles:['h1{color: red }' , 'h2{ color: blue}']
})

export class TutorialComponent {

}
