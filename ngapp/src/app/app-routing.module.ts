import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountsListComponent } from './admin-space/admin-accounts-list/admin-accounts-list.component';
import { AdminAppartementsListComponent } from './admin-space/admin-appartements-list/admin-appartements-list.component';
import { AdminDashboardComponent } from './admin-space/admin-dashboard/admin-dashboard.component';
import { AdminDetailsEditComponent } from './admin-space/admin-details-edit/admin-details-edit.component';
import { AdminSideNavComponent } from './admin-space/admin-side-nav/admin-side-nav.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserClientClaimComponent } from './user-space/user-client-claim/user-client-claim.component';
import { UserClientLogComponent } from './user-space/user-client-log/user-client-log.component';
import { UserClientPurchasesComponent } from './user-space/user-client-purchases/user-client-purchases.component';
import { UserClientsListComponent } from './user-space/user-clients-list/user-clients-list.component';
import { UserDashboardComponent } from './user-space/user-dashboard/user-dashboard.component';
import { UserProfileDetailsComponent } from './user-space/user-profile-details/user-profile-details.component';
import { UserSideNavComponent } from './user-space/user-side-nav/user-side-nav.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Login', 
    pathMatch:'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Admin',
    redirectTo: 'Admin/Dashboard',
    pathMatch:'full',
  },
  {
    path:'Admin',
    component:AdminSideNavComponent,
    canActivate: [AdminGuard],
    children:[
                {
                  path:'Dashboard',
                  component:AdminDashboardComponent
                },
                {
                  path:'Accounts',
                  component:AdminAccountsListComponent
                },
                {
                  path:'Appartements',
                  component: AdminAppartementsListComponent
                }
              ]
  },


  {
    path: 'User',
    redirectTo: 'User/Dashboard',
    pathMatch:'full',
  },
  {
    path:'User',
    component:UserSideNavComponent,
    canActivate: [AuthGuard],
    children:[
                {
                  path:'Dashboard',
                  component:UserDashboardComponent
                },
                {
                  path:'Clients',
                  component:UserClientsListComponent,
                },
                {
                  path:'Clients/Log/:id',
                  component: UserClientLogComponent
                },
                {
                  path:'Clients/Purchases/:id',
                  component: UserClientPurchasesComponent
                },
                {
                  path:'Clients/Claims/:id',
                  component: UserClientClaimComponent
                },
                {
                  path:'Details',
                  component: UserProfileDetailsComponent
                }
              ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
