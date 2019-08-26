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

  repoSearch(searchName) {
    this.repoService.getrepos(searchName).then(
      (results) => {
        this.repo = this.repoService.allRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('rileyarnie');
  }

}
