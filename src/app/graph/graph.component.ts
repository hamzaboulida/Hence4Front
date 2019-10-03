import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  PieChart=[];

  public commentdata = [];
  public i = 0;
  public x ;
  public BdCom ={};

  public pos=0;
  public neg=0;
  public neut=0;
  public spam=0;
  public na=0; 

  constructor(    
    private httpClientService: HttpService
    ) { }

    
  ngOnInit()
  {
    this.httpClientService.getDBl().subscribe((data)=>{
      this.x = data;

    this.httpClientService.getData().subscribe(data => {
      this.commentdata = data;
      console.log(this.commentdata)

    this.httpClientService.getComments().subscribe((res)=>{
      this.BdCom = res;

    for(let a=0 ;a<this.x;a++){
      
      if (this.BdCom[a]['label']=='negatif'){this.neg++}
      else if (this.BdCom[a]['label']=='positif'){this.pos++}
      else if (this.BdCom[a]['label']=='neutre'){this.neut++}
      else {this.spam++}
      
    }

// pie chart:
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Positif", "Negatif", "Neutre", "SPAM", "N/A"],
 datasets: [{
     label: '# of Votes',
     data: [this.pos,this.neg , this.neut, this.spam, 40],
     backgroundColor: [
         'rgba(0, 255, 0, 1)', //blue
         'rgba(255, 0, 0, 1)', //red
         'rgba(0, 0, 255, 1)', //green
         'rgba(0, 0, 0, 1)', //BLACK
         'rgba(255, 159, 64, 0.5)' // NA
     ],
     borderColor: [
         'rgba(255,255,255,0.5)',
         'rgba(255,255,255,0.5)',
         'rgba(255,255,255,0.5)',
         'rgba(255,255,255,0.5)',
         'rgba(255,255,255,0.5)',
     ],
     borderWidth: 3
 }]
}, 
options: {
 title:{
     text:"Pie Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

})
})
})
  }




}