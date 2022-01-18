import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [ 
    
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {path: 'home', component:HomeComponent },
      {path: 'form', component:FormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
