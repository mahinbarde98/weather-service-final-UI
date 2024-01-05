import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth_guard/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder,private resgisterService:RegistrationService,private router: Router,private authService:AuthService) {}

  registerForm: FormGroup | any;
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]], // Added email validation
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]]
    });
  }

  private passwordValidator(control: { value: string; }) {
    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  

  register() {
   
    this.resgisterService.registerUser(this.registerForm.value).subscribe(
      (response) => {
        
        alert('Congratulations, registarting successfull!!')
        location.reload();
       
      },
      (error) => {
        console.error('Registration error:', error);
        
      }
    );
  }
}
