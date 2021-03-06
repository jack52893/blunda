import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LimitPipe } from './utils/pipes/limit.pipe';
import { DealsComponent } from './products/deals/deals.component';
import { SearchComponent } from './products/search/search.component';
import { RatingComponent } from './products/rating/rating.component';
import { ReviewComponent } from './products/review/review.component';
import { PopularComponent } from './products/popular/popular.component';
import { ProductComponent } from './products/product/product.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { PriceComponent } from './products/price/price.component';
import { DiscountComponent } from './products/discount/discount.component';
import { FavoriteComponent } from './products/favorite/favorite.component';
import { BestSellerTagComponent } from './products/tags/best-seller-tag/best-seller-tag.component';
import { RelatedProductCardComponent } from './products/related-product-card/related-product-card.component';
import { AddToCartButtonComponent } from './products/buttons/add-to-cart-button/add-to-cart-button.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { SuccessComponent } from './cart/success/success.component';
import { RecommendedProductsComponent } from './products/recommended-products/recommended-products.component';
import { RecentlyViewedProductsComponent } from './products/recently-viewed-products/recently-viewed-products.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { CategoryComponent } from './categories/category/category.component';
import { MainCategoriesComponent } from './categories/main-categories/main-categories.component';
import { MainCategoryComponent } from './categories/main-category/main-category.component';
import { MainCategoryCardComponent } from './categories/main-category-card/main-category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LimitPipe,
    SearchComponent,
    RatingComponent,
    ReviewComponent,
    PopularComponent,
    DealsComponent,
    ProductComponent,
    ProductCardComponent,
    CartComponent,
    PriceComponent,
    DiscountComponent,
    FavoriteComponent,
    BestSellerTagComponent,
    RelatedProductCardComponent,
    AddToCartButtonComponent,
    CheckoutComponent,
    SuccessComponent,
    RecommendedProductsComponent,
    RecentlyViewedProductsComponent,
    FooterComponent,
    CategoryComponent,
    CategoryCardComponent,
    MainCategoriesComponent,
    MainCategoryComponent,
    MainCategoryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
