import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from './apiservice.service';
import { DailogComponent } from './dailog/dailog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  data: any;

  constructor(private dialog: MatDialog, private api: ApiServiceService) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.api.getProduct()
      .subscribe({
        next: (res) => {
          this.data = res[0]
        },
        error: (err) => {
          alert('error while fetching')
        }
      })

  }

  editProduct() {
    this.dialog.open(DailogComponent, {
      width: '60%',
      data: this.data
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllProducts();
      }
      this.getAllProducts()
    })
  }

}


