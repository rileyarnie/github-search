import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { UserserviceService } from '../userservice';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repo: Repos;
  constructor( public repoService: UserserviceService ) { }

  findrepo(searchName) {
    this.repoService.getrepos(searchName).then(
      (results) => {
        this.repo = this.repoService.totalrepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.findrepo('rileyarnie');
  }

}
