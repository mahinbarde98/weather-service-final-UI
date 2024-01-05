import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../auth_guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup | any;
  registrationForm: FormGroup|any;
  showRegistrationModal: boolean = false;

public User ={
  username:'',
  password:'',
  name:'',
}

  constructor(private fb: FormBuilder,private loginService: LoginService,private router: Router,private authService:AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
     
      console.log('Username:', this.loginForm.value.username);
      console.log('Password:', this.loginForm.value.password);
      const { username, password } = this.loginForm.value;
      this.loginService.login(username, password).subscribe(
        response => {
         
          
          console.log('Login successful:', response);

          // this.authService.storeTokenAndUsername(response.token,response.username);
          // console.log("username :",localStorage.getItem('username'));
           console.log("token :",localStorage.getItem('token'))
          // console.log("username form service:",this.authService.getuserName());
          
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', response.username);
          // this.authService.storeTokenAndUsername(response.username,response.token);

           this.router.navigate(['/home']);
        },
        error => {
         
          console.error('Login error:', error);
        }
      );
    }
  }

  register(){
    this.router.navigate(['/register'])
  }
}
