import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  public limitReached: boolean;

  constructor() { 
    this.limitReached = false;
  }

  ngOnInit(): void {
  }

  items: string[] = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6'
  ];

  answers: string[] = [
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    
    this.limitReached = this.answers.length == 5 ? true : false;

    console.log("Event Container Data", event.container.data);
    console.log("Items", this.items);
    console.log("Answers", this.answers);
  }
}
