import { Component, OnInit } from '@angular/core';
import { Sheet1Service } from '../sheet1.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productData: any = [];
  productDataFilter: any = [];
  search: string = '';
  numLow: string = '';
  error: boolean = false;

  constructor(private csv: Sheet1Service) {}
  ngOnInit(): void {
    this.csv.getData().subscribe(res => {
      this.productData = res;
    });
  }

  startSearch() {
    this.productDataFilter = [];
    this.error = false;
    let newObj = this.productData.filter(value => {
      return value.LawName === this.search ? value : null;
    });
    let newobj2 = newObj[0].components.filter(value => {
      return value.componentNum === this.numLow ? value : null;
    });
    newobj2[0].refTo.forEach(item => {
      const obj = {};
      if (item.refTo_eId) this.productDataFilter.push(item.refTo_eId);
    });
    if (this.productDataFilter === null) this.error = true;
  }
}
