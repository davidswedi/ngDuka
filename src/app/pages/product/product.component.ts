import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Subscription, switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  imports: [],
  template: `
    <main class="max-width">
      @if(loading()){
      <h1>Chargement du produit...</h1>
      } @else { @if(product){
      <div class="product-container">
        <img [src]="product.image" alt="product image" />
      </div>

      <div class="product-info">
        <h1>{{ product.title }}</h1>
        <p>
          <b>$ {{ product.category }}</b>
        </p>
        <p>
          {{ product.price }}
        </p>
        <div class="quantity-container">
          <span>Quantité:</span>
          <button
            (click)="qtyHandling('minus')"
            disabled="{{ productQty() === 1 }}"
          >
            -
          </button>

          <span
            ><b>{{ productQty() }}</b></span
          >
          <button
            (click)="qtyHandling('add')"
            disabled="{{ productQty() === 5 }}"
          >
            +
          </button>
        </div>
        <hr />

        <span>
          <b>Total: $ {{ product.price * productQty() }}</b>
        </span>
        <button (click)="addToCart()">Ajouter au panier</button>
        <hr />
        <p>{{ product.description }}</p>
      </div>
      }@else {
      <p>Aucun produit trouvé</p>
      } }
    </main>
  `,
  styles: ``,
})
export default class ProductComponent implements OnInit, OnDestroy {
  loading = signal(true);
  product?: Product;
  route = inject(ActivatedRoute);
  es = inject(ApiService);
  title = inject(Title);
  routeSub?: Subscription;
  productQty = signal(1);
  ngOnInit(): void {
    this.routeSub = this.route.params
      .pipe(switchMap((params) => this.es.getProductById(params['id'])))
      .subscribe((product) => {
        this.product = product;
        this.title.setTitle(`${product.title} - ngDuka`);
        this.loading.set(false);
      });
  }

  addToCart() {
    console.log('add to cart');
  }

  qtyHandling(operation: string) {
    if (operation === 'add') {
      this.productQty.update((qty) => qty + 1);
    } else {
      this.productQty.update((qty) => qty - 1);
    }
  }
  hello() {
    console.log('hello');
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
