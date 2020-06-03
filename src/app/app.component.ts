import { Component } from '@angular/core';
import { InfopageService } from './services/infopage.service';
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public InfoPageService: InfopageService,
                public ProductosService: ProductosService ) {

  }
}
