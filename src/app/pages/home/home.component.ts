import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = false;
  constructor() {}

  ngOnInit(): void {}

  chips = ['One fish', 'Tw1o fish', 'Accent fish', 'Warn fish'];
  selectedChips: string[] = [];

  toggleSelection(chip: string): void {
    const index = this.selectedChips.indexOf(chip);
    if (index > -1) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(chip);
    }
  }

  isChipSelected(chip: string): boolean {
    return this.selectedChips.includes(chip);
  }
}
