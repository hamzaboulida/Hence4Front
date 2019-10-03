import { Component, OnInit } from '@angular/core';
import { HttpService, Comments} from '../http.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import exportFromJSON from 'export-from-json'
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import { saveAs } from 'file-saver';
// import exportFromJSON from 'export-from-json/dist/types/exportJSON';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']

})
export class ShowComponent implements OnInit {
  Url = 'http://localhost:8080/comments';
  public commentdata = [];
  name = new FormControl('');
  public i = 0;
  public x ;

  public BdCom ={};
   
  constructor(    
    private router: Router, 
    private route: ActivatedRoute,
    private httpClientService: HttpService
    ) { }
  
  ngOnInit() {
    // commentdata contient le commentaire de l'indice i , commentdata est un objet (comment ; label)
    this.httpClientService.getData().subscribe(data => {
    this.commentdata = data;
    console.log(this.commentdata)
    
      }
    );
    //initialiser x avec sa valeur 

    this.httpClientService.getDBl().subscribe((data)=>{
      this.x = data;
      console.log(this.x)
    }
    );

    
  }

  //variable x contient la taille du bd ; pour connaitre la position du 1er commentaire qui n'a pas de label

   

Start() { 
  console.log(this.commentdata[this.x]["comment"])
  this.name.setValue(this.commentdata[this.x]['comment']); 
  }

  Back(){
    this.name.setValue(this.commentdata[this.x-1]["comment"]);
    this.x=this.x-1;
  }

  positif(){
    // Il faut initialiser BdCom a chaque fois qu'on click sur le button
    this.httpClientService.getComments().subscribe((res)=>{
      this.BdCom = res;
      console.log(this.BdCom);

    //si le comm existe deja dans la BD on va afficher le com suivant sans envoyer le com acctuel
    if (JSON.stringify(this.BdCom).includes(this.commentdata[this.x]['comment']) == false){
        //we give a label to comment 
        this.commentdata[this.x]["label"] ='positif';
        console.log(this.x);
        //we add comment with its label
        return this.httpClientService.postData(this.commentdata[this.x])
        .subscribe(res => {console.log('this comment is positif');
        console.log(this.x);
          //x = x+1  jump to the next comment  
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
        console.log(this.x);
      }, (err) => {
        console.log(err);
      
        }
      );
      
      }else{
        let id = this.BdCom[this.x]["id"]
        this.BdCom[this.x]['label']='positif'
        this.httpClientService.putLabel(id,this.BdCom[this.x]).subscribe((data)=>{console.log(data)})
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
  }
}
);
}

 

 negatif(){
        
    // Il faut initialiser BdCom a chaque fois qu'on click sur le button
    this.httpClientService.getComments().subscribe((res)=>{
      this.BdCom = res;
      console.log(this.BdCom);
    //si le comm existe deja dans la BD on va afficher le com suivant sans envoyer le com acctuel
    if (JSON.stringify(this.BdCom).includes(this.commentdata[this.x]['comment']) == false){
        //we give a label to comment 
        this.commentdata[this.x]["label"] ='negatif';
        
        //we add comment with its label
        return this.httpClientService.postData(this.commentdata[this.x])
        .subscribe(res => {console.log('this comment is negatif');
        console.log(this.x);
          //x = x+1  jump to the next comment  
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
        console.log(this.x);
      }, (err) => {
        console.log(err);
      
        }
      );
      
      }else{
        //ici on traite le cas du misclick , apres le click sur le button back 
        //on va traiter aussi le cas des plusieurs utilisateurs
        let id = this.BdCom[this.x]["id"]
        this.BdCom[this.x]['label']='negatif'
        this.httpClientService.putLabel(id,this.BdCom[this.x]).subscribe((data)=>{console.log(data)})
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
  }
}
);
}

neutre(){
          // Il faut initialiser BdCom a chaque fois qu'on click sur le button
    this.httpClientService.getComments().subscribe((res)=>{
      this.BdCom = res;
      console.log(this.BdCom);
    //si le comm existe deja dans la BD on va afficher le com suivant sans envoyer le com acctuel
    if (JSON.stringify(this.BdCom).includes(this.commentdata[this.x]['comment']) == false){
        //we give a label to comment 
        this.commentdata[this.x]["label"] ='neutre';
        
        //we add comment with its label
        return this.httpClientService.postData(this.commentdata[this.x])
        .subscribe(res => {console.log('this comment is neutre');
        console.log(this.x);
          //x = x+1  jump to the next comment  
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
        console.log(this.x);
      }, (err) => {
        console.log(err);
      
        }
      );
      
      }else{
        let id = this.BdCom[this.x]["id"]
        this.BdCom[this.x]['label']='neutre'
        this.httpClientService.putLabel(id,this.BdCom[this.x]).subscribe((data)=>{console.log(data)})
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
  }
}
);
}

spam(){      
      // Il faut initialiser BdCom a chaque fois qu'on click sur le button
    this.httpClientService.getComments().subscribe((res)=>{
      this.BdCom = res;
      console.log(this.BdCom);
    //si le comm existe deja dans la BD on va afficher le com suivant sans envoyer le com acctuel
    if (JSON.stringify(this.BdCom).includes(this.commentdata[this.x]['comment']) == false){
        //we give a label to comment 
        this.commentdata[this.x]["label"] ='SPAM';
        
        //we add comment with its label
        return this.httpClientService.postData(this.commentdata[this.x])
        .subscribe(res => {console.log('this comment is Spam');
        console.log(this.x);
          //x = x+1  jump to the next comment  
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
        console.log(this.x);
      }, (err) => {
        console.log(err);
      
        }
      );
      
      }else{
        let id = this.BdCom[this.x]["id"]
        this.BdCom[this.x]['label']='SPAM'
        this.httpClientService.putLabel(id,this.BdCom[this.x]).subscribe((data)=>{console.log(data)})
        this.x++;
        this.name.setValue(this.commentdata[this.x]["comment"]);
  }
}
);
}

public Datas : Comments =new Comments("","","");

//Now we fetch data from File 
getData(indice){
    this.httpClientService.getData().subscribe(data => {console.log(data[indice]);
    let com=data[indice]["comment"];
    return com ;
    
  // (this.Datas=data)

  }
  );
}

//cette fonction a comme but de fetcher les commentaire et les stocker dans la base de données apres la classification 

postData(indice,label,commentaire){
  //getData pour fetcher les comms
    this.httpClientService.getData().subscribe(data => {console.log(data[indice]);
   
    this.Datas["comment"]=data[indice]["comment"];
    this.Datas["label"]=data[indice]["label"];
    commentaire=this.Datas["comment"];
    console.log(this.Datas);
    let Dd : Comments =new Comments("",commentaire,data[indice][label]);
    this.httpClientService.postData(Dd)
      .subscribe( (data) => {
       //console.log(data)
          }
        );
      }
    );
  }


  




// Writer(){
//   var writeFile = require('write');
// writeFile('foo.txt', 'This is content...', function(err) {
//   if (err) console.log(err);
// });
// }

}
