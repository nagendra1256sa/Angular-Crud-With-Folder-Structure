import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../dataProviders/service.service';

interface EducationType {
  value: string;
  viewValue: string;
}
export interface UserEditDetailsType{
  id:number;
  Name:string;
  LastName:string;
  Email:String;
  DOB:string;
  Gender:string;
  Education:string;
  Company:string;
  PhoneNumber:string[];
}

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.scss']
})
export class UserFromComponent implements OnInit {
  userForm!:FormGroup
  data:UserEditDetailsType|undefined
  Education : EducationType[]=[
    {value:'Diploma', viewValue:'Diploma'},
    {value:'Intermidate', viewValue:'Intermidate'},
    {value:'PG', viewValue:'PG'},
    {value:'UG', viewValue:'UG'},

  ]
  constructor(private _fb:FormBuilder,private _NRouter:Router,private _userService:UserService,private ActiveRoute:ActivatedRoute)
  {
       this.userForm=this._fb.group({
         Name: new FormControl('',[Validators.required,this.noSpaceValidator(),this.noNumbersValidator(),this.noSpecialChValidator()]),
         LastName: new FormControl('',[Validators.required,this.noSpaceValidator(),this.noNumbersValidator(),this.noSpecialChValidator()]),
         Email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z]/)]),
         DOB: new FormControl('',[Validators.required]),
         Gender: new FormControl('',[Validators.required]),
         Education: new FormControl('',[Validators.required]),
         Company:new FormControl('',[Validators.required,this.noSpecialChValidator(),this.noSpaceValidator()]),
         PhoneNumber: new FormArray([new FormControl('',[Validators.required,
          Validators.pattern(/^[1-9]\d{9}$/)])]),
       })
  }
  noSpaceValidator()
  {
    return (control:AbstractControl):ValidationErrors|null=>
    {
      // const required=this.empForm?.get('Sku')?.errors?.['required'] as boolean;
      const hasSpace=/^\s/.test(control.value)
      return hasSpace ? {'noSpaces':true}:null
    }
  }
  noNumbersValidator()
  {
    return (control:AbstractControl):ValidationErrors|null=>{
      const hasNumbers=/\d/.test(control.value)
      return hasNumbers? {'noNumbers':true}:null
    }
  }
  noSpecialChValidator()
  {
    return (control:AbstractControl):ValidationErrors|null=>
    {
      const hasSpecialCh=/[^\w\s]/.test(control.value);
      return hasSpecialCh ? {'noSpecial':true}:null
    }
  }
  ngOnInit(): void {
    const UId=this.ActiveRoute.snapshot.paramMap.get('id');
    const id= UId ? parseInt(UId):NaN;
    if(id)
    {
       this._userService.getUserListById(id).subscribe({
         next:(val)=>
         {
           this.data=val;
           if(this.data)
           {
            const myArray=this.userForm.get('PhoneNumber') as FormArray;
             this.userForm.get('Name')?.setValue(this.data.Name)
             this.userForm.get('LastName')?.setValue(this.data.LastName)
             this.userForm.get('Email')?.setValue(this.data.Email)
             this.userForm.get('DOB')?.setValue(this.data.DOB)
             this.userForm.get('Gender')?.setValue(this.data.Gender)
             this.userForm.get('Company')?.setValue(this.data.Company)
             this.userForm.get('Education')?.setValue(this.data.Education)
             myArray.clear();
             for(const Number of this.data.PhoneNumber)
             {
               myArray.push(new FormControl(Number,[Validators.required,Validators.pattern(/^[1-9]\d{9}$/)]))
             }
           }
         },error:(err)=>
         {
           alert('Not Found')
           this._NRouter.navigate(['dashboard/users'])
         }
       })
    }
  }
  onSubmit()
  {
      if(this.data)
      {
         if(this.userForm.valid)
         {
           this._userService.UpdateUser(this.userForm.value,this.data.id).subscribe({
             next:(val)=>
             {
               this._NRouter.navigate(['/dashboard/users'])
             },
             error:(err)=>
             {
               alert("Not Found")
             }
           })
         }
      }
      else{
         if(this.userForm.valid)
         {
           this._userService.addUsers(this.userForm.value).subscribe({
            next:(val)=>{
              alert('data added successfully' )
              this._NRouter.navigate(['dashboard/users'])
            }
           })
         }
      }
  }
  addNumber()
  {
     const control=new FormControl('',[Validators.required,Validators.pattern(/^[1-9]\d{9}$/)]);
     (this.userForm.get('PhoneNumber')as FormArray).push(control)
  }
  get PhoneControls()
  {
     return this.userForm.get('PhoneNumber') as FormArray
  }
  deleteField(index:number)
  {
     const myArray=this.userForm.get('PhoneNumber') as FormArray;
     if(myArray && myArray.length>index)
     {
       myArray.removeAt(index)
     }
  }
  disableButton():boolean
  {
     return this.PhoneControls.length ===1;
  }
  checkDirty()
  {
     return this.data && this.userForm.dirty
  }
  dateFilter(d: Date |null)
  {
    return d !== null && d.getFullYear()>= 2001 && d<=new Date();
  }

}

