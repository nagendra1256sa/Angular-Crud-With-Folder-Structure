import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../dataProviders/login.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public LoginError!: boolean;
  // public loginCheck:boolean=false;
  loginFormGroup!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
    public translate: TranslateService
  ) {
    this.loginFormGroup = this._fb.group({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?!\s)/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
        ),
      ]),
    });
  }
  ngOnInit(): void {
    //  this.getLogindetails();
  }
  // getLogindetails()
  // {
  //    this._loginService.getLoginDetails().subscribe({
  //      next:(val)=>
  //      {
  //       if(val.success&&val.responseData)
  //       {
  //         this.LoginData=val.responseData
  //       }
  //       else{
  //         console.log(val.message);

  //       }

  //      }
  //    })
  // }
  // passwordChecking():boolean
  // {
  //    const username=this.loginFormGroup.value.userName;
  //    const password=this.loginFormGroup.value.password;
  //    return this.LoginData?.some((user:any)=>
  //    {
  //       return user.user_name===username && user.password===password
  //    })
  // }
  login() {
    if (this.loginFormGroup.valid) {
      // if(this.passwordChecking())
      // {
      //       localStorage.setItem('loginCredintials',JSON.stringify(this.loginFormGroup.value))
      //       this._router.navigate(['dashboard'])
      //       this.loginCheck=false;
      // }
      // else{
      //      this.loginCheck=true
      // }
      this._loginService
        .getLoginDetailsByName(this.loginFormGroup.value)
        .subscribe({
          next: (res) => {
            if (res.success && res.responseData) {
              localStorage.setItem(
                'loginCredintials',
                JSON.stringify(this.loginFormGroup.value)
              );
              this._router.navigate(['/main/dashboard']);
            } else {
              this.LoginError = true;
              //  console.log(this.LoginError);
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
