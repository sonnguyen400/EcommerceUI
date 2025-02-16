import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './core/features/login/login-form/login-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EcommerceUgyhuI';
}
