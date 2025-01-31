import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'products/:category',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
  },
];
