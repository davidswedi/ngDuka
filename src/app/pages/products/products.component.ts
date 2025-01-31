import { Component, input } from '@angular/core';
import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  templateUrl: './products.component.html',
  styles: ``,
})
export default class ProductsComponent {
  category = input('category');
}
