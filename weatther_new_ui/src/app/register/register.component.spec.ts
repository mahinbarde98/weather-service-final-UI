// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { RegisterComponent } from './register.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RegistrationService } from '../services/registration.service';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth_guard/auth.service';
// import { ReactiveFormsModule } from '@angular/forms';

// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;
//   let registrationServiceSpy: jasmine.SpyObj<RegistrationService>;
//   let routerSpy: jasmine.SpyObj<Router>;
//   let authServiceSpy: jasmine.SpyObj<AuthService>;

//   beforeEach(
//     waitForAsync(() => {
//       registrationServiceSpy = jasmine.createSpyObj('RegistrationService', ['registerUser']);
//       routerSpy = jasmine.createSpyObj('Router', ['navigate']);
//       authServiceSpy = jasmine.createSpyObj('AuthService', ['someAuthMethod']);

//       TestBed.configureTestingModule({
//         declarations: [RegisterComponent],
//         imports: [HttpClientTestingModule, ReactiveFormsModule],
//         providers: [
//           { provide: RegistrationService, useValue: registrationServiceSpy },
//           { provide: Router, useValue: routerSpy },
//           { provide: AuthService, useValue: authServiceSpy },
//         ],
//       }).compileComponents();
      
//       fixture = TestBed.createComponent(RegisterComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();
//     })
//   );

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize the form with required controls', () => {
//     expect(component.registerForm.get('name')).toBeTruthy();
//     expect(component.registerForm.get('username')).toBeTruthy();
//     expect(component.registerForm.get('password')).toBeTruthy();
//   });
// });
