import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private route: Router) { }

  login = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });


  ngOnInit(): void {
  }
  responsedata: any;
  ProceedLogin() {
    if (this.login.valid) {
      this.service.ProceedLogin(this.login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          localStorage.setItem('token', this.responsedata.token)
          this.route.navigate(['/home']);
          alert('Form is Working')
        }
        else {
          console.log('error')
        }
      })
    }
  }

}