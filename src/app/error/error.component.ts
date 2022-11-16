import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An error occured! Please Contact Support via Email or (905)-878-4351'
  constructor() { }

  ngOnInit(): void {
  }

}
