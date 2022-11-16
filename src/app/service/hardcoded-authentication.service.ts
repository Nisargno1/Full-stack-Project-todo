import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  //This service is created because it is going to be applied onto all time(all pages/session) until logout. 
  authenticate(username: string, password: string){
    if(username==='User' && password==='Nisarg'){
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
