import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { LoginService } from '../../dataProviders/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
      public signUpForm!:FormGroup
      
      constructor(private signUPService:LoginService,private router:Router)
      {
         this.signUpForm=new FormGroup({
            userName:new UntypedFormControl("",[Validators.required,Validators.pattern(/^(?!\s)/)]),
            password:new UntypedFormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8}$/)])
         })
      }
      signUp()
      {
        if(this.signUpForm.valid)
        {
          this.signUPService.postLoginDetails(this.signUpForm.value).subscribe({
            next:()=>{
              this.router.navigate(['/login'])
            }
          })
        }
      }
}
