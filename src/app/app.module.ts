import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ExperiencePipe } from './experience.pipe';
import { GenderPipe } from './gender.pipe';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { EmpbyidComponent } from './empbyid/empbyid.component';

const appRoot: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'employee', canActivate: [AuthGuard], component: EmployeeComponent },
  { path: 'empbyid', canActivate: [AuthGuard], component: EmpbyidComponent },
  { path: 'products', canActivate: [AuthGuard], component: ProductComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeComponent,
    ExperiencePipe,
    GenderPipe,
    LoginComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
