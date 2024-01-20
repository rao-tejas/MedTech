import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  isLoggedIn = false; // Set this variable based on user authentication status

  viewProfile() {
    // Handle viewing the user's profile information
  }

  login() {
    // Handle the login action
    this.isLoggedIn = true; // For demonstration purposes; adjust based on your authentication logic
  }

  logout() {
    // Handle the logout action
    this.isLoggedIn = false; // For demonstration purposes; adjust based on your authentication logic
  }

}
