import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products-page',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
    // constructor(private itemService: ItemService) {}

    ngOnInit(): void {
        // this.itemService
        //   .getAll()
        //   .subscribe((items) => (this.items = items.data.items));
      }
}