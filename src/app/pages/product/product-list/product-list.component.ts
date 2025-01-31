import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  loading = signal(true);
  private router = inject(Router);
  private title = inject(Title);
  products?: Product[];
  api = inject(ApiService);
  productSub?: Subscription;
  sectionTitle = input.required<string>();
  query = input.required<string>();
  queryLimitCounty = input<number>();
  ngOnInit(): void {
    const product$ =
      this.query() === 'allProducts'
        ? this.api.getProducts()
        : this.api.getProductByCategory(this.query(), this.queryLimitCounty());
    this.productSub = product$.subscribe((products) => {
      if (this.router.url.includes('products')) {
        this.title.setTitle(`${products[0].category} - ngDuka`);
      }
      this.products = products;
      this.loading.set(false);
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
