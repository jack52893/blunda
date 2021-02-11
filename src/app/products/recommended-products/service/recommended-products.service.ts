import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { products } from '../../product/service/product.data';
import { Product } from '../../product/service/product.model';

@Injectable({ providedIn: 'root' })
export class RecommendedProductsService {
  getRecommendedProducts(): Observable<Product[]> {
    return Utils.getObservable<Product[]>(products.slice(0, 20));
  }
}
