import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { ICreateProduct, IEditProduct, IProduct } from "@shared/models/product/product";

@Injectable({
    providedIn: 'root',
  })
export class ProductService {
  public routePrefix = '/products';
  constructor(private httpService: HttpService) {}

  getAll(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(
      `${this.routePrefix}`
    );
  }

  getById(id: number): Observable<IProduct> {
    return this.httpService.getById<IProduct>(
      `${this.routePrefix}`,
      id
    );
  }

  create(product: ICreateProduct): Observable<IProduct> {
    return this.httpService.post<IProduct>(`${this.routePrefix}`, product);
  }

  edit(id: number, product: IEditProduct): Observable<IProduct> {
    return this.httpService.put<IProduct>(`${this.routePrefix}/${id}`, product);
  }

  delete(id: number) {
    return this.httpService.delete(`${this.routePrefix}`, id);
  }

  renewProductQuantity(): Observable<boolean> {
    return this.httpService.post<boolean>(`${this.routePrefix}/renew`);
  }
}
