import { Routes } from '@angular/router';
import { SobreComponent } from './intituicional/sobre/sobre.component';
import { ContatoComponent } from './intituicional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig : Routes = [
    { path: '', redirectTo: '/home', pathMatch : 'full' },
    { path : 'home', component: HomeComponent },
    { path : 'contato', component: ContatoComponent },
    { path : 'sobre', component: SobreComponent },
    { path : 'produtos', component: ListaProdutoComponent },
    { path : 'produto-detalhe/:id', component: ListaProdutoComponent }
];