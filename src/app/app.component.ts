import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Task1';

  selectedNumber: number = 1;
  multiplicationTable: number[] = [];

  // // Call printTable initially to generate the default table
  // ngOnInit(): void {
  //   this.printTable();
  // }

  printTable(): void {
    this.multiplicationTable = []; // reset the table
    for (let i = 1; i <= 10; i++) {
      this.multiplicationTable.push(this.selectedNumber * i);
    }
  }
}
