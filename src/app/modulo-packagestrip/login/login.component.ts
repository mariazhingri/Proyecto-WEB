import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.services';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  loggedIn: boolean = false;

  hide = true;

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  password = new FormControl('', [Validators.required]);
  usuario = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.usuario.hasError('required')) {
      return 'Debe introducir su usuario';
    }

    return this.usuario.hasError('email') ? 'Usuario no válido' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Debe introducir su contraseña';
    }

    return this.password.hasError('password') ? 'Contraseña no válida' : '';
  }

  //this.loggedIn = false;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) {}

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (
      this.usuarioLogin.value.usuario == 'grupo10' &&
      this.usuarioLogin.value.password == '123'
    ) {
      this.authService.setUsername(this.usuarioLogin.value.usuario);
      this.authService.setLoggedIn(true);
      this.router.navigate(['/BodyComponent']);
      this.dialogRef.close();
    } else {
      this.alert = true;
      setTimeout(() => (this.alert = false), 4000);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
