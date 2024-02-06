import { NgModule } from "@angular/core";
import { AuthGuard } from "@core/guards/auth.guard";
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "@shared/shared.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AuthPageComponent,  SignInComponent, SignUpComponent],
    imports: [AuthRoutingModule, SharedModule, FormsModule],
    providers: [AuthGuard]
})
export class AuthModule { }