import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-session-storage',
  templateUrl: './local-session-storage.component.html',
  styleUrls: ['./local-session-storage.component.scss']
})
export class LocalSessionStorageComponent implements OnInit {
  public displayLocal: boolean;
  public displaySession: boolean;
  public getItemSession: any;
  public getItemLocal: any;

  myObjLocal: object = { name: 'Skip', breed: 'Labrador' };
  myObjSession: object = { name: 'Lion', breed: 'Golden Retriever'};

  ngOnInit() {
    this.displayLocal = false;
    this.displaySession = false;
  }

  public setItemLocal(): void {
    this.displayLocal = true;
    localStorage.setItem('key', JSON.stringify(this.myObjLocal));
    this.getItemLocal = JSON.parse(localStorage.getItem('key'));
  }

  public removeItemLocal(): void {
    localStorage.removeItem('key');
    this.displayLocal = false;
  }

  public setItemSession(): void {
    this.displaySession = true;
    sessionStorage.setItem('key', JSON.stringify(this.myObjSession));
    this.getItemSession = JSON.parse(sessionStorage.getItem('key'));
  }

  public removeItemSession(): void {
    sessionStorage.removeItem('key');
    this.displaySession = false;
  }
}
