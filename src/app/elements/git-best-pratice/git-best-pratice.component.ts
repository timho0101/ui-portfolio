import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-best-pratice',
  templateUrl: './git-best-pratice.component.html',
  styleUrls: ['./git-best-pratice.component.scss']
})
export class GitBestPraticeComponent implements OnInit {

  public code = `
    - At least three person reviews and approves the Pull Request.
  `;

  ngOnInit() {
  }

}
