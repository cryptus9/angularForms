import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  username: string = ""

  usernameControl = new FormControl("", Validators.required)

  ngOnInit(): void {
  }

  printValue(){
    console.info("data: ", this.username)
  }

}
