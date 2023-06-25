import { Component, OnInit } from '@angular/core';
import { OrdersComponent } from '../../pages/kitchen/dialogs/orders/orders.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openOrder(id: any) {
    const dialogRef = this.dialog.open(OrdersComponent, {
      panelClass: 'custom-dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
