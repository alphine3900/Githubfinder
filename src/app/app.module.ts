import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SearchuserService } from './search-service/search.service';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    FormsModule,
    RouterModule.forRoot([
      
      {path: 'home', component:HomeComponent },
      {path: 'form', component:FormComponent},
    ])
  ],
  providers: [SearchuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
