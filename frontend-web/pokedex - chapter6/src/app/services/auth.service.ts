import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hardcodedEmail = 'admin@example.com';
  private hardcodedPassword = 'password123';

  constructor() {
  }

  login(email: string, password: string) {
    if (email === this.hardcodedEmail && password === this.hardcodedPassword) {
      const userDetails = {
        email: email,
        password: password
      };
      localStorage.setItem('user', JSON.stringify(userDetails));
      return true;
    }
    return false;
  }

  getUserDetails(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
