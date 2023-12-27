// snack.component.ts
import { Component, OnInit } from '@angular/core';
import { SnackService } from './snacks.service';
import { SharedService } from '../sharedservices.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  snacks: any;
  selectedCategories: string[] = [];

  constructor(
    private snackService: SnackService,
    private sharedService: SharedService // Inject the shared service
  ) {}

  ngOnInit(): void {
    this.snackService.getSnacks().subscribe(
      res => {
        this.snacks = res;
      }
    );
  }
getUniqueCategories(): string[] {
  return Array.from(new Set(this.snacks.map((snack: { category: any; }) => snack.category)));
}

selectCategory(category: string): void {
  // Toggle category selection
  if (this.selectedCategories.includes(category)) {
    this.selectedCategories = this.selectedCategories.filter(c => c !== category);
  } else {
    this.selectedCategories.push(category);
  }
}

  addtoOrder(snack: any) {
    this.sharedService.addToOrder(snack);
  }
}
