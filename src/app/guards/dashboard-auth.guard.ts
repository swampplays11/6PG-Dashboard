import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { BotService } from '../services/bot.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate() {
    await this.userService.init();
        
    return Boolean(this.userService.user);
  }  
}
