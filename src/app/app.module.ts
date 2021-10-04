import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TarefasListaComponent } from './source_modules/product_screen/product_list/product-list.component';
import { TarefasCadastroComponent } from './source_modules/product_screen/products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    TarefasListaComponent,
    TarefasCadastroComponent,
    RegistrationComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
