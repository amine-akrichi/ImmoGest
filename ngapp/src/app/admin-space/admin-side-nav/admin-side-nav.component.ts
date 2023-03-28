import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent {
  constructor(protected _router: Router){
    
  }

  logout(){
    sessionStorage.clear()
    this._router.navigate(['/Login'])
  }
}
