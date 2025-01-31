import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer-container max-width">
      <div class="left-container">
        <div>
          <p><b>PRODUITS</b></p>
          <a routerLink="/products/electronics">Electroniques</a>
          <a routerLink="/products/jewelery">Bijoux</a>
          <a routerLink="/products/men's clothing">Vetements pour Hommes</a>
          <a routerLink="/products/women's clothing">Vetements pour Femmes</a>
        </div>

        <div>
          <p><b>LIENS</b></p>
          <a href="" target="_blank">Tutorial YouTube</a>
          <a href="" target="_blank">Code Githubn</a>
          <a href="" target="_blank">Malakisi</a>
        </div>
      </div>

      <p>
        <b>ngDuka</b>
        {{ date.getFullYear() }} <br />
        Est une application de vente en ligne. Elle est developpee avec Angular.
      </p>
    </footer>
  `,
  styles: `
       footer{
        background:#e4e4e4;
       }
       .footer-container{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        flex-wrap: wrap;

        .left-container{
          display:flex;
          gap:3rem;
          a{
           display:block;
            margin: 0.5rem 0;
            
          }
        }
       }


  `,
})
export class FooterComponent {
  date = new Date();
}
