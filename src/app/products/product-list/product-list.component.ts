import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 selectedid:number=0;
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedid = params['id'];
    });
  }
  productList=[{
    "id":1,
    "name":'Hyundai'
 },
 {
  "id":2,
  "name":'Maruti Suzuki'
},
{
  "id":3,
  "name":'Honda'
}
]

}
