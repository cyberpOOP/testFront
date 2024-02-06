import { Component, OnInit } from "@angular/core";
import { OrderService } from "@core/services/order.service";
import { IUserOrder } from "@shared/models/order/order";

@Component({
    selector: 'app-user-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
    public isLoading: boolean = true;
    public orders: IUserOrder[];

    constructor(private orderService: OrderService) {
        orderService.getAllNotDone().subscribe(
            (res) => {
                this.isLoading = false;
                this.orders = res;
            });
    }

    handleOrderSending(id: number) {
        this.isLoading = true;

        this.orderService.markOrderAsDone(id).subscribe(() => {
            this.orders = this.orders.filter(order => order.id !== id);
        });

        this.isLoading = false;
    }
}
