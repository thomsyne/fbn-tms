import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggedInUserObject } from "..";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private userData = new BehaviorSubject<LoggedInUserObject| null>(null);
  userData$ = this.userData.asObservable();

  constructor() {
    if (this.getLoggedInUser()) {
      this.updateUserData();
    }
  }

  updateUserData() {
    if (this.getLoggedInUser() !== null)
      this.userData.next(this.getLoggedInUser());
  }

  getLoggedInUser(): LoggedInUserObject | null {
    if (!!localStorage.getItem("xTD_tA32")) {
      return JSON.parse(String(localStorage.getItem("xTD_tA32")));
    } else {
      return null;
    }
  }

}
