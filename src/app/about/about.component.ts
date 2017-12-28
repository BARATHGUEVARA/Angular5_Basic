import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router'
import {MyServiceService} from '../myService.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   goals : any;
  constructor(private route : ActivatedRoute,private router : Router,private _data : MyServiceService) { 
    this.route.params.subscribe( res => console.log(res.id))
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  goHome(){
    this.router.navigate(['']);
  }

}
