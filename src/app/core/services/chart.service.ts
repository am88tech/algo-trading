import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  createStockChart(ctx: string, data: any): Chart {
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Stock Price',
          data: data.prices,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }

  createProfitLossChart(ctx: string, data: any): Chart {
    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Profit/Loss',
          data: data.values,
          backgroundColor: data.values.map((value: number) => 
            value >= 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)'
          ),
          borderColor: data.values.map((value: number) => 
            value >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)'
          ),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}