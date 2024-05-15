import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, ReactiveFormsModule,
      CommonModule,  FooterComponent, HeaderComponent,
      MaterialModule
    ],

})

export class AppComponent implements OnInit {

  constructor () {

  }

  ngOnInit(): void {
  }
}
