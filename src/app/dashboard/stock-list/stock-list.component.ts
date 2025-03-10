import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StockService } from '../../core/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  displayedColumns: string[] = ['symbol', 'name', 'price', 'change', 'volume', 'marketCap', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private stockService: StockService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.loadStocks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private loadStocks(): void {
    this.stockService.getMarketOverview().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  viewAnalysis(symbol: string): void {
    this.stockService.getStockAnalysis(symbol).subscribe(
      analysis => {
        console.log('Stock Analysis:', analysis);
        // TODO: Show analysis in dialog
      }
    );
  }
}
