import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Chart, registerables } from "node_modules/chart.js";
import { SaleService } from 'src/app/services/sale.service';
import { ClaimService } from 'src/app/services/claim.service';

Chart.register(...registerables)

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  clientList: any[] = []
  monthlyclientList: any[] = []
  currentDate = new Date()
  currentMonth = this.currentDate.getMonth() + 1
  salesList:any[] = []
  claimList: any[] = []


  constructor(private _clientService: ClientService, private _saleService: SaleService,private _claimService: ClaimService) { }

  ngOnInit(): void {
    this._clientService.listUserClients(JSON.parse(sessionStorage.getItem('loggedInUser') || '{}'))
      .subscribe(
        res => {
          //console.log(res)
          this.clientList = res
          this.clientList.forEach(element => {
            if (element.creationDate.slice(5, 7) == this.currentMonth) {
              this.monthlyclientList.push(element)
            }
          });
          this.renderCharts(this.monthlyclientList, 'gender-pie-chart', 'gender', 'doughnut', '')
          this.renderCharts(this.monthlyclientList, 'info-pie-chart', 'infoOrigin', 'doughnut', '')
          this.renderCharts(this.monthlyclientList, 'appartement-bar-chart', 'interestedInappartementType', 'bar', '')
          this.renderCharts(this.monthlyclientList, 'adress-bar-chart', 'habitationAdress', 'bar', 'y')
        },
        err => console.log(err)
      )
    this._saleService.listSale()
      .subscribe(
        res => {
          //console.log(res);
          this.salesList = res
        },
        err => console.log(err)
      )

    this._claimService.listClaims()
        .subscribe(
          res =>{
            //console.log("Client Claims"+res);
            this.claimList = res
          },
          err => console.log(err)  
        )
  }



  countFrequencyArray(array: any[], property: string) {
    let frequency: { [key: string]: number } = {};
    array.forEach(item => {
      let itemKey = JSON.stringify(item[property]);
      frequency[itemKey] = frequency[itemKey] ? frequency[itemKey] + 1 : 1;
    });
    let frequencyArray = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    console.log(frequencyArray);
    
    return frequencyArray;
  }

  getItemAndFrequency(frequencyArray: Array<[string, number]>) {
    let items = frequencyArray.map(item => JSON.parse(item[0]));
    let frequencies = frequencyArray.map(item => item[1]);
    console.log({ items, frequencies });
    
    return { items, frequencies };
  }


  renderCharts(monthlyclientList: any, id: any, itemKey: any, charttype: any, indexAxis: any) {

    const chartFrecuency = this.countFrequencyArray(monthlyclientList, itemKey)
    
    let items, frequencies;
    ({ items, frequencies } = this.getItemAndFrequency(chartFrecuency));
    
    //console.log(items);
    //console.log(frequencies);

    const chart = document.getElementById(id) as any
    new Chart(chart, {
      type: charttype,
      data: {
        labels: items,
        datasets: [{
          label: 'Clients',
          data: frequencies,
          backgroundColor: [
            '#ff914d',
            '#a6a6a6',
            '#183661',
            '#545454',
            '#FAB95B',
            '#1746A2'
          ],
        }]
      },

      options: {
        responsive: true,
        indexAxis: indexAxis,
      }
    });
  }


}
