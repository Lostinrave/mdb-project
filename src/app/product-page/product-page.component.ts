import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productId = 0;
  product : any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }
  // Kaip pasiekti produkto :id parametra is url?
  // Si funkcija suveikia visada, kai uzkraunamas komponentas
  ngOnInit(): void {
    this.productId = this.route.snapshot.params.id;
    console.log(this.productId);
    // budas atvaizduoti, jei id neina is eiles
    // ciklo masyvas pereiti visus products masyvo elementus
    for(let i=0; i < products.length; i++){
      // konkreciam elementui patikriname objekto id reiksme
      if(products[i].id == this.productId){
        this.product = products[i];
        // sustabdome cikla rade reikiama elementa
        break;
      }
    }
    // Priskiriame produkto objektui, duomenis is duomenu masyvo pagal produkto/elemento ID
    // paprasciausias budas atvaizduoti, jei id eina is eiles
    // this.product = products[this.productId - 1];
    // console.log(this.product);
  }

}
