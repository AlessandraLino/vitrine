import { BrowserModule } from '@angular/platform-browser';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt); 

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { SobreComponent } from './intituicional/sobre/sobre.component';
import { ContatoComponent } from './intituicional/contato/contato.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produtos/produtos.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    SobreComponent,
    ContatoComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash : false}) ]
  ],
  providers: [
    ProdutoService,
    { provide : APP_BASE_HREF , useValue:'/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
