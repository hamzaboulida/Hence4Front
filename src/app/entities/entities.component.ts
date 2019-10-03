import { Component, OnInit } from '@angular/core';
import { HttpService, Entities} from '../http.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent implements OnInit {
  
  ent: Entities = new Entities("","","") ;

  constructor(    
    private httpClientService: HttpService
    ) { }

  ngOnInit() {
  }


  myFunction() {
    this.httpClientService.postEntity(this.ent).subscribe((data)=>
    {console.log(data)})
  }
}
