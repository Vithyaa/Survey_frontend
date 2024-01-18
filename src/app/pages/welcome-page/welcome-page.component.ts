import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  selectedLanguage: string | null = null;

  onSubmit() {
    // Ensure that a language is selected before storing in local storage
    if (this.selectedLanguage) {
      localStorage.setItem('language', JSON.stringify(this.selectedLanguage));

      console.log('Language submitted successfully!');
    }
  }

}

