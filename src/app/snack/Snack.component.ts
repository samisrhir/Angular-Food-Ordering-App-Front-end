import { Component, OnInit } from '@angular/core';
import { SnackService } from './snacks.service';
import { SharedService } from '../sharedservices.service';
import { Router } from '@angular/router';
import { Snack } from '../Snack';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {
  snacks: Snack[] = [];
  
  selectedCategories: string[] = [];

  constructor(private router: Router, private snackService: SnackService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.snackService.getSnacks().subscribe(
      (res: Snack[]) => {
        this.snacks = res;
      }
    );
  }

  getUniqueCategories(): string[] {
    return Array.from(new Set(this.snacks.map((snack: Snack) => snack.category)));
  }

  selectCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
  }

  addtoOrder(snack: Snack) {
    this.sharedService.addToOrder(snack);
  }
}
