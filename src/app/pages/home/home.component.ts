import { Component } from '@angular/core';
import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Le meilleur site de vente en ligne</h3>
      <input type="text" placeholder="Rechercher un produit" />
    </section>
    <app-product-list
      sectionTitle="Electroniques"
      query="electronics"
      [queryLimitCounty]="4"
    ></app-product-list>
    <br />

    <app-product-list
      sectionTitle="Bijoux"
      query="jewelery"
      [queryLimitCounty]="4"
    ></app-product-list>
    <br />

    <app-product-list
      sectionTitle="Vetements Homme"
      query="men's clothing"
      [queryLimitCounty]="4"
    ></app-product-list>
    <br />

    <app-product-list
      sectionTitle="Vetments Femme"
      query="women's clothing"
      [queryLimitCounty]="4"
    ></app-product-list>
    <br />
    <br />
  `,
  styles: `
    .hero-section{
      background:linear-gradient(to right,#FF7F7F,#FFB6C1);
      padding: 2rem;

      input{
        width:50vw;
        padding: 0.5rem;
        font-size: 1rem;
      }
    }
  
  `,
})
export default class HomeComponent {}
