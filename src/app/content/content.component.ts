import { Component, OnInit } from '@angular/core';
import { Dog } from '../../server/models/dogmodel';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public dogdata: Dog;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllData('dogs').subscribe(
      data => this.dogdata = data,
      err => console.log(err),
      () => console.log('completed')
      );
  }

}
