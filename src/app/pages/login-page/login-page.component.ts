// login-page.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormData {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData: FormData = this.myForm.value;

      // Store data in localStorage (consider security implications)
      localStorage.setItem('user', JSON.stringify(formData));

      console.log('Form submitted successfully!');
    }
  }
}

