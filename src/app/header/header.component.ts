import { Component, OnInit } from '@angular/core';
import { HttpService, Comments} from '../http.service';
import exportFromJSON from 'export-from-json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public BdCom ={};
  public enti ={};
  constructor(private httpClientService: HttpService) { }

  ngOnInit() {
  }


file:any;
fileChanged(e) {
    this.file = e.target.files[0];
}

// Upload the file to the SS
upload() {
  // Instantiate a FormData to store form fields and encode the file
  let body = new FormData();
  this.Clean();
  // Add file content to prepare the request
  body.append("file", this.file);
  // Launch post request
  console.log(this.file.name);
  this.httpClientService.upload(body)
  .subscribe(
    // Admire results
    (data) => {console.log(data)},
    // Or errors :-(
    error => console.log(error),
    // tell us if it's finished
    () => { console.log("completed") }
  );
}

download() {
  this.httpClientService.getEntities().subscribe((res)=>{
this.enti = res;
  const data = JSON.stringify(this.enti) ;
  const fileName = 'Entities_OUT'
  const exportType = 'json'
  exportFromJSON({ data, fileName, exportType })

  })

  this.httpClientService.getComments().subscribe((res)=>{
    this.BdCom = res;

  const data = JSON.stringify(this.BdCom) ;
  const fileName = 'Coments_OUT'
  const exportType = 'json'
 
exportFromJSON({ data, fileName, exportType })

})
}

Clean(){
  this
      .httpClientService.Clean()
      .subscribe((data)=>
      {console.log('DB is empty now')
      alert('YOU CAN START A NEW PROJECT NOW');
      window.location.reload(); 
    }
  );
  
}
}