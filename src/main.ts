import 'zone.js/dist/zone';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
  <ul>
    <li *ngFor="let item of items">{{item}}</li>
  </ul>
</div>`,
})

/*
Write a method to find the second largest number in an array?
Example:
 
• Input: [ 5, 30, 8908, 2, 33, 2, 876, 92, 11, 0 ]
 
• Output: 876
*/

export class App {
  name = 'Angular';
  @Input() items: string[] = ['Banana', 'House', 'Apple', 'Tree', 'Peach'];

  ngOnInit(){
    this.removeAlts();
    console.log(this.getSecondLargest([ 5, 30, 8908, 2, 33, 2, 876, 92, 11, 0 ]));
  }

  removeAlts(){
    this.items = this.items.filter((item, i) => i % 2 === 0);

  }

  getSecondLargest(arrayNum: number[]): number {
    let secLargeNum = 0;
    let largestNum = 0;

    for(let num of arrayNum) {
      //TODO: Logic for retaining 2nd largest
      if(num > largestNum){
        secLargeNum = largestNum;
        largestNum = num;
      } else if(num > secLargeNum && num !== largestNum) {
        secLargeNum = num;
      }
    }
    return secLargeNum;
  }
}

bootstrapApplication(App);
