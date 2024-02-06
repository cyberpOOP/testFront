import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IRegisterUser } from '@shared/models/user/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  public onSubmit(form: NgForm) {
    if(!form.valid) return;
    this.isLoading = true;

    const user: IRegisterUser = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    };
    
    this.authService.signUp(user).subscribe(
      res => {
        this.isLoading = false;
        if(res) this.router.navigate(['/']);
      },
      error => {
        console.error(error.message);
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
