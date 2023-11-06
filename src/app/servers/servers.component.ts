import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',   // selector as attribute
  selector: '.app-servers',       // selector as class
  templateUrl: './servers.component.html',
  // template:` <app-server></app-server>
  //            <app-server></app-server>
  //           `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!'
  serverName='';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000 );

  }

  ngOnInit(): void {
  }

//event binding
onCreateServer(){
  this.serverCreationStatus = 'Server was created!'
}

onUpdateServerName(event:any){
  // console.log(event);
  this.serverName =event.target.value;
}

}
