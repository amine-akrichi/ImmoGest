import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AdminSideNavComponent } from './admin-space/admin-side-nav/admin-side-nav.component';
import { AdminDashboardComponent } from './admin-space/admin-dashboard/admin-dashboard.component';
import { AdminAccountsListComponent } from './admin-space/admin-accounts-list/admin-accounts-list.component';
import { AdminDetailsEditComponent } from './admin-space/admin-details-edit/admin-details-edit.component';
import { UserSideNavComponent } from './user-space/user-side-nav/user-side-nav.component';
import { UserClientsListComponent } from './user-space/user-clients-list/user-clients-list.component';
import { UserDashboardComponent } from './user-space/user-dashboard/user-dashboard.component';
import { UserProfileDetailsComponent } from './user-space/user-profile-details/user-profile-details.component';
import { AddClientDialogComponent } from './user-space/components/add-client-dialog/add-client-dialog.component';
import { UpdateClientDialogComponent } from './user-space/components/update-client-dialog/update-client-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { CreateUserDialogComponent } from './admin-space/components/create-user-dialog/create-user-dialog.component';
import { UpdateUserDialogComponent } from './admin-space/components/update-user-dialog/update-user-dialog.component';
import { AdminAppartementsListComponent } from './admin-space/admin-appartements-list/admin-appartements-list.component';
import { CreateAppartementDialogComponent } from './admin-space/components/create-appartement-dialog/create-appartement-dialog.component';
import { UpdateAppartementDialogComponent } from './admin-space/components/update-appartement-dialog/update-appartement-dialog.component';
import { UserClientLogComponent } from './user-space/user-client-log/user-client-log.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { AddClientRecordDialogComponent } from './user-space/components/add-client-record-dialog/add-client-record-dialog.component';
import { UpdateClientRecordDialogComponent } from './user-space/components/update-client-record-dialog/update-client-record-dialog.component';
import { UserClientClaimComponent } from './user-space/user-client-claim/user-client-claim.component';




import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule} from '@angular/material/menu';
import { MatBadgeModule } from "@angular/material/badge";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ClientSellingAgreementComponent } from './user-space/components/client-selling-agreement/client-selling-agreement.component';
import { UserClientPurchasesComponent } from './user-space/user-client-purchases/user-client-purchases.component';
import { SaleModificationDialogComponent } from './user-space/components/sale-modification-dialog/sale-modification-dialog.component';
import { AddModificationDialogComponent } from './user-space/components/add-modification-dialog/add-modification-dialog.component';
import { UpdateModificationDialogComponent } from './user-space/components/update-modification-dialog/update-modification-dialog.component';
import { SalePaymentsDialogComponent } from './user-space/components/sale-payments-dialog/sale-payments-dialog.component';
import { AddPaymentDialogComponent } from './user-space/components/add-payment-dialog/add-payment-dialog.component';
import { UpdatePaymentDialogComponent } from './user-space/components/update-payment-dialog/update-payment-dialog.component';
import { AddClientClaimDialogComponent } from './user-space/components/add-client-claim-dialog/add-client-claim-dialog.component';
import { UpdateClientClaimDialogComponent } from './user-space/components/update-client-claim-dialog/update-client-claim-dialog.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminSideNavComponent,
    AdminDashboardComponent,
    AdminAccountsListComponent,
    AdminDetailsEditComponent,
    UserSideNavComponent,
    UserClientsListComponent,
    UserDashboardComponent,
    UserProfileDetailsComponent,
    AddClientDialogComponent,
    UpdateClientDialogComponent,
    CreateUserDialogComponent,
    UpdateUserDialogComponent,
    AdminAppartementsListComponent,
    CreateAppartementDialogComponent,
    UpdateAppartementDialogComponent,
    UserClientLogComponent,
    DeleteConfirmationDialogComponent,
    AddClientRecordDialogComponent,
    UpdateClientRecordDialogComponent,
    UserClientClaimComponent,
    ClientSellingAgreementComponent,
    UserClientPurchasesComponent,
    SaleModificationDialogComponent,
    AddModificationDialogComponent,
    UpdateModificationDialogComponent,
    SalePaymentsDialogComponent,
    AddPaymentDialogComponent,
    UpdatePaymentDialogComponent,
    AddClientClaimDialogComponent,
    UpdateClientClaimDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,


    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
