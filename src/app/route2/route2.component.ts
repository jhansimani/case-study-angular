import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  items: Product[] = [];
  order = '';
  price = 'price';
  toggled = false;
  isGrid = true;
  isLoading = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.http.get<Product[]>('assets/products.json').subscribe((res) => {
      this.items = res;
      this.isLoading = false;
    });
  }
  togglePriceDropdown() {
    this.toggled = !this.toggled;
  }
  toggleGrid() {
    this.isGrid = true;
  }
  toggleList() {
    this.isGrid = false;
  }
  close(sort: string) {
    this.toggled = false;
    this.order = sort;
  }
  outsideClick() {
    this.toggled = !this.toggled;
  }
}
