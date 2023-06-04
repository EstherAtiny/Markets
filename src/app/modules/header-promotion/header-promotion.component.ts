import {Component, OnInit} from '@angular/core';
import {Path} from "../../config";
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit{
  path:string=Path.url;
  constructor(private ProductsService:ProductsService) {}
  ngOnInit():void{
    this.ProductsService.getdata()
      .subscribe(resp=>{
        console.log("resp",resp);
      })
  }
}
