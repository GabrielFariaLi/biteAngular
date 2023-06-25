import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
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
  number: any = 0;
  ngOnInit(): void {}
}
