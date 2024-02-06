import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ILoginUser } from '@shared/models/user/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  isLoading: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  public onSubmit(form: NgForm) {
    if(!form.valid) return;
    this.isLoading = true;

    const user: ILoginUser = {
      email: form.value.email,
      password: form.value.password,
    };

    this.authService.signIn(user).subscribe(
      res => {
        this.isLoading = false;
        if(res) this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
    form.reset();
  }
}
