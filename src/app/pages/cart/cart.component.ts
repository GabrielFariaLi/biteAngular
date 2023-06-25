import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showFiller = false;
  chips = ['One fish', 'Tw1o fish', 'Accent fish', 'Warn fish'];
  selectedChips: string[] = [];
  number: any = 0;
  produtosTeste = [
    {
      id: 1,
      titulo: 'Hamburguin 🍔',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
      quantidade: 1,
    },
    {
      id: 1,
      titulo: 'Hamburguin 🍔',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
      quantidade: 1,
    },
    {
      id: 1,
      titulo: 'Hamburguin 🍔',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
      quantidade: 1,
    },
    {
      id: 1,
      titulo: 'Hamburguin 🍔',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
      quantidade: 1,
    },
    {
      id: 1,
      titulo: 'Hamburguin 🍔',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
      quantidade: 1,
    },
  ];
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
