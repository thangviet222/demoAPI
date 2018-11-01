import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { aq } from '../aq';

@Component({
  selector: 'app-connect-api',
  templateUrl: './connect-api.component.html',
  styleUrls: ['./connect-api.component.css']
})
export class ConnectApiComponent implements OnInit {

  data_aq: aq[]
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://202.160.1.102:8084/api/aq').subscribe(
      data => {
      console.log(data)
    })
  }

}
