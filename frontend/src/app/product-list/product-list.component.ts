import { Component, OnInit   } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface Product {
  id:number; 
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  showDescription?: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  
  
  products: Product[] = [];
  showDescriptionButton = true;
  currentIndex: number = 0;
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  toggleDescription(product: Product): void {
    if (product.description) {
      product.showDescription = !product.showDescription;
      this.showDescriptionButton = !this.products.some(p => p.showDescription);
      product.image == null;
    }
  }

 
 
  showNextCards() {

if(this.currentIndex<this.products.length-4){
  this.currentIndex+=4;}}


  showPreviousCards() {

if(this.currentIndex>0){
  this.currentIndex -=4;

}
        
  }

  getVisibleProducts(): Product[] {
    const startIndex = this.currentIndex;
    const endIndex = startIndex + 4;
    return this.products.slice(startIndex, endIndex);
  }
}
