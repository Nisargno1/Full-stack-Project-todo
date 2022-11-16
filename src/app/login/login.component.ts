import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
// import { JwtAuthenticationService } from '../service/jwtauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidUser: boolean = false
  invalidLogin = false

  //Router
  //Dependency Injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  // hardcodedAuthenticationService is used as dependency injection to authinticate the user.
  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidUser = false;
    }
    else{
      this.invalidUser = true
      console.log(this.username+' fucker loged in')
    // console.log(this.password+' is the password')
    }
    
  }

  // handleBasicAuthLogin() {
  //   this.jwtAuthenticationService.executeAuthenticationService(this.username, this.password)
  //       .subscribe({
  //         next: (data) => {console.log(data)
  //                          this.router.navigate(['welcome', this.username]);
  //                           this.invalidLogin = false;
  //         },
  //         error: (error) => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  // })
  // }

  // handleJWTAuthLogin() {
  //   this.jwtAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
  //       .subscribe({
  //         next: (data) => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false      
  //         },
  //         error: (error) => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  // })
  // }

}
