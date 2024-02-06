import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderStatus } from '@shared/enums/order-status';
import { IUserOrder } from '@shared/models/order/order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: IUserOrder;
  @Output() sendOrderEmitter = new EventEmitter<any>();
  public isOrderWaiting: boolean;

  ngOnInit(): void {
    this.isOrderWaiting = this.order.orderStatus === OrderStatus.WaitingForProducts;
  }

  sendOrder(): void {
    this.sendOrderEmitter.emit(this.order.id);
  }
}
