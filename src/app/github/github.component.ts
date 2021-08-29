import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service'


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  
})


export class GithubComponent implements OnInit {

  user:any;
  displayUser:any;
  showUserName(){
    this.service.showUser(this.user).subscribe(profile => {
      console.log(profile)
      return this.displayUser = profile;
    });
  }
  constructor( private service:ApiService ) {  }

  ngOnInit(): void {
  }

}
