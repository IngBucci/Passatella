import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { TableComponent } from "./table/table.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [TableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'passatella';

  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
