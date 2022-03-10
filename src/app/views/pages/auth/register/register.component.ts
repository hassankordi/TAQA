import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private router: Router , private fb : FormBuilder) { }

  ngOnInit(): void {
    
  }


  // data 
  onRegister(e) { 
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    // if (localStorage.getItem('isLoggedin')) {
    //   this.router.navigate(['/']);
    // }
  }

}
