import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AthService } from 'app/services/ath.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup; // Use FormGroup instead of UntypedFormGroup

  constructor(
    private serv: AthService,
    private authService: AthService,
    private router: Router
  ) {
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required), 
      password: new FormControl('', Validators.required), 
    });

  }

   ngOnInit() {
    
 }

  authenticate() {
    const signinData = this.signinForm.value;
    this.authService.authenticate(signinData).subscribe(
      (data) => {
        console.log('data:', data);

        if (data.token != null) {
          this.authService.setToken(data.token); // Store the token in the AthService
          this.router.navigateByUrl('/dashboard');
        } else {
          console.log('null');
        }
      },
      (error) => {
        console.error('Error authenticating:', error);
      }
    );
  }

}
