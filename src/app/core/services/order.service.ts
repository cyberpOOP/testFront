import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { ICreateOrder, IOrder, IUserOrder } from "@shared/models/order/order";

@Injectable({
    providedIn: 'root',
  })
export class OrderService {
  public routePrefix = '/orders';
  constructor(private httpService: HttpService) {}

  getAll(): Observable<IUserOrder[]> {
    return this.httpService.get<IUserOrder[]>(
      `${this.routePrefix}`
    );
  }

  getAllNotDone(): Observable<IUserOrder[]> {
    return this.httpService.get<IUserOrder[]>(
      `${this.routePrefix}/not-done`
    );
  }

  getById(id: number): Observable<IUserOrder> {
    return this.httpService.getById<IUserOrder>(
      `${this.routePrefix}`,
      id
    );
  }

  getUserOrders(): Observable<IUserOrder[]> {
    return this.httpService.get<IUserOrder[]>(
      `${this.routePrefix}/user`
    );
  }

  create(order: ICreateOrder): Observable<IOrder> {
    return this.httpService.post<IOrder>(`${this.routePrefix}`, order);
  }

  markOrderAsDone(id: number): Observable<IOrder> {
    return this.httpService.post<IOrder>(`${this.routePrefix}/${id}/done`);
  }
}
