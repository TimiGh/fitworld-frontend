import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../global-service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      // confirm_password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  login() {
    if (!this.isControlValid('email') || !this.isControlValid('password')) {
      return;
    }
    // console.log(this.registerForm);
    this.globalService.login(this.registerForm.controls).subscribe(res => {
      this.globalService.saveBearer(this.registerForm.value.email, this.registerForm.value.password);
      this.router.navigate(['/']);
    }, error1 => {
      this.router.navigate(['/']);
    });
  }

  isControlValid(controlName): boolean {
    return this.registerForm.get(controlName).valid && this.registerForm.get(controlName).touched;
  }
}
