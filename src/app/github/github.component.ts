import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ReposerveService } from 'src/app/reposerve.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],  
})


export class GithubComponent implements OnInit {

  user:any;
  displayUser:any;
  shiwUse:any;
  showUserName(){
    this.service.showUser(this.user).subscribe(about => {
      console.log(about)
      return this.displayUser = about;
    });
  }
  showUse(){
    this.newserve.getRepo(this.user).subscribe(description => {
      console.log(description)
      return this.shiwUse = description;
    });
  }
  constructor( private service:ApiService, private newserve:ReposerveService ) {  }

  ngOnInit(): void {
  }

}
