import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
})
export class CardapioComponent implements OnInit {
  constructor() {}

  produtosTeste = [
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
    {
      id: 1,
      titulo: 'Titulo Produto 📝',
      desc: ' There are many variations of passages of Lorem Ipsum available, but the majority ',
      price: 0.0,
      img: 'assets/imgs/hamburgerCardItem.jpg',
    },
  ];
  ngOnInit(): void {}
  showFiller = false;
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
