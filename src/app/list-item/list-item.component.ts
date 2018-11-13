import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

public dogs = [];

  constructor(private _dogsService: DogsService) { }

  ngOnInit() {
    this._dogsService.getDogs()
    .subscribe(data => this.dogs = data);
  }

}
