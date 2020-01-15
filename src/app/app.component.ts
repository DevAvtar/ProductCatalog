import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetchData.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  otherTabs:boolean=false;
  productList:any;
  productKey=["Mandrill","CambridgeFx","Mavenlink","GitHub","Asana","Okta","ICIMs","Pendo",
  "Repsly","Returnly","VersaPay","FullContact","SurveyMonkey","Calculator","Pinterest","Taulia",
  "TalentReef","AccurateBackground","Samanage","VCloudAir","Lyft","Billy","CloudElements","GoogleCloudStorage",
  "SapHybrisMarketing","OneLogin","AcquiaLiftProfileMgr","Infoplus","Ipify","FacebookAds","PaychexFlex","Sprinkler"
];
productKeyOthers=["Repsly","Returnly","VersaPay","FullContact","SurveyMonkey","Calculator","Pinterest","Taulia",
  "TalentReef","AccurateBackground","Samanage","VCloudAir","Lyft","Billy","CloudElements","GoogleCloudStorage",
  "SapHybrisMarketing","OneLogin","AcquiaLiftProfileMgr","Infoplus","Ipify","FacebookAds","PaychexFlex","Sprinkler"
];

  constructor(private fetchData:FetchDataService){

  }

  ngOnInit(){
    this.fetchData.getData().subscribe(data=>
      {
  this.productList=data;
  console.log(this.productList);
  console.log(this.productList["Mandrill"].image);
      }
    )

  }
  replaceLineBreak(s:string) {
    return s.substring(0,100);
  }
  generalTab(){
    this.otherTabs=false;
  }
  othersTab(){
    this.otherTabs=true;
    console.log(this.otherTabs);
  }

}
