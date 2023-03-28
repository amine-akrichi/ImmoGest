import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from "node_modules/chart.js";
import { ClientService } from 'src/app/services/client.service';
import { SaleService } from 'src/app/services/sale.service';
import { UserService } from 'src/app/services/user.service';

Chart.register(...registerables)

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  clientsList: any[] = []
  usersList: any[] = []
  salesList: any[] = []
  monthlyclientsList: any[] = []
  currentDate = new Date()
  currentMonth = this.currentDate.getMonth() + 1

  constructor(private _clientService: ClientService, private _userService: UserService,private _saleService: SaleService) { }

  ngOnInit(): void {
    this._clientService.listClients()
      .subscribe(
        res => {
          console.log(res)
          this.clientsList = res
          this.clientsList.forEach(element => {
            if (element.creationDate.slice(5, 7) == this.currentMonth) {
              this.monthlyclientsList.push(element)
            }
          });
          this.renderCharts(this.monthlyclientsList, 'gender-pie-chart', 'gender', 'doughnut', '')
          this.renderCharts(this.monthlyclientsList, 'info-pie-chart', 'infoOrigin', 'doughnut', '')
          this.renderCharts(this.monthlyclientsList, 'appartement-bar-chart', 'interestedInappartementType', 'bar', '')
          this.renderCharts(this.monthlyclientsList, 'adress-bar-chart', 'habitationAdress', 'bar', 'y')
        },
        err => console.log(err)

      )

    this._userService.listUsers()
      .subscribe(
        res => {
          console.log(res)
          this.usersList = res
        },
        err => console.log(err)

      )

    this._saleService.listSale()
      .subscribe(
        res => {
          console.log(res);
          this.salesList = res
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
    return frequencyArray;
  }

  getItemAndFrequency(frequencyArray: Array<[string, number]>) {
    let items = frequencyArray.map(item => JSON.parse(item[0]));
    let frequencies = frequencyArray.map(item => item[1]);
    return { items, frequencies };
  }


  renderCharts(monthlyclientList: any, id: any, itemKey: any, charttype: any, indexAxis: any) {

    const genderFrecuency = this.countFrequencyArray(monthlyclientList, itemKey)
    let items, frequencies;
    ({ items, frequencies } = this.getItemAndFrequency(genderFrecuency));
    console.log(items);
    console.log(frequencies);

    const gender = document.getElementById(id) as any
    new Chart(gender, {
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
