import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  
  userFormGroup = new FormGroup({
    usernameControl : new FormControl("", Validators.required),
    emailControl : new FormControl("", [Validators.required, Validators.email])
  })

  ngOnInit(): void {
  }

  printValue(){
    console.info("data: ", this.userFormGroup.value)
  }

}
